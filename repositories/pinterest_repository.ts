import axios from 'axios';
import { SocialMediaService } from '../services/SocialMediaService';
import { SocialData } from '../types/models_types/social_data_type';
import { SocialMediaError } from '../errors/SocialMediaError';
import { PinterestData } from '../models/socialDataModels'; // Mongoose model
import { getFromCache, setToCache } from '../utils/cache';

export class PinterestRepository implements SocialMediaService {
  private cacheTTL = 3600;  // 1 hour TTL (can be adjusted)

  async fetchData(): Promise<SocialData> {
    // Check if we have cached data in MongoDB
    const cachedData = getFromCache('pinterest');
    if (cachedData) return cachedData;

    // Check if we have cached data in MongoDB
    const latestData = await PinterestData.findOne().sort({ createdAt: -1 });
    if (latestData && (Date.now() - new Date(latestData.createdAt).getTime()) / 1000 < this.cacheTTL) {
      return latestData.toObject() as SocialData;
    }

    // If no cached data or cache expired, fetch from API
    const { PINTEREST_ACCESS_TOKEN, PINTEREST_BOARD_ID } = process.env;
    if (!PINTEREST_ACCESS_TOKEN || !PINTEREST_BOARD_ID) {
      throw new SocialMediaError('Pinterest access token or board ID not configured.', 500);
    }

    try {
      const endpoint = `https://api.pinterest.com/v5/boards/${PINTEREST_BOARD_ID}/pins`;
      const response = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${PINTEREST_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      const data = this.transformData(response.data.data);

      // Store the transformed data in MongoDB
      await PinterestData.create(data);
      setToCache('pinterest', data, this.cacheTTL);  // Store in cache

      return data;
    } catch (error: any) {
      throw new SocialMediaError(error.message, error.response?.status || 500);
    }
  }

  private transformData(apiData: any): SocialData {
    // Transform the Pinterest data into SocialData format
    return {
      dates: apiData.map((item: any) => ({ date: item.date })),
      platforms: apiData.map((item: any) => ({ platform: item.platform })),
      languages: apiData.map((item: any) => ({ language: item.language })),
      likes: apiData.map((item: any) => ({ count: item.likes })),
      comments: apiData.map((item: any) => ({ count: item.comments })),
      shares: apiData.map((item: any) => ({ count: item.shares })),
      plays: apiData.map((item: any) => ({ count: item.plays })),
      duration: apiData.map((item: any) => ({ duration: item.duration })),
      status: apiData.map((item: any) => ({ status: item.status })),
      audienceRegions: apiData.map((item: any) => ({ region: item.audience_region })),
      descriptions: apiData.map((item: any) => ({ description: item.description })),
      headingForwards: apiData.map((item: any) => ({ heading_forward: item.heading_forward })),
      downloads: apiData.map((item: any) => ({ downloads: item.downloads })),
      countries: apiData.map((item: any) => ({ country: item.country })),
    };
  }
}
