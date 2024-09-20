import axios from 'axios';
import { SocialMediaService } from '../services/SocialMediaService';
import { SocialData } from '../types/models_types/social_data_type';
import { SocialMediaError } from '../errors/SocialMediaError';
import { TikTokData } from '../models/socialDataModels'; // Mongoose model
import { getFromCache, setToCache } from '../utils/cache';

export class TikTokRepository implements SocialMediaService {
  private cacheTTL = 3600;  // 1 hour TTL (can be adjusted)

  async fetchData(): Promise<SocialData> {
    // Check if we have cached data in MongoDB
    const cachedData = getFromCache('tiktok');
    if (cachedData) return cachedData;

    const latestData = await TikTokData.findOne().sort({ createdAt: -1 });
    if (latestData && (Date.now() - new Date(latestData.createdAt).getTime()) / 1000 < this.cacheTTL) {
      return latestData.toObject() as SocialData;
    }

    // If no cached data or cache expired, fetch from API
    const { TIKTOK_ACCESS_TOKEN } = process.env;
    if (!TIKTOK_ACCESS_TOKEN) {
      throw new SocialMediaError('TikTok access token not configured.', 500);
    }

    try {
      const response = await axios.get('https://open.tiktokapis.com/v1/your_endpoint', {
        headers: {
          Authorization: `Bearer ${TIKTOK_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      const data = this.transformData(response.data.data);

      // Store the transformed data in MongoDB
      await TikTokData.create(data);
      setToCache('tiktok', data, this.cacheTTL);  // Store in cache

      return data;
    } catch (error: any) {
      throw new SocialMediaError(error.message, error.response?.status || 500);
    }
  }

  private transformData(apiData: any): SocialData {
    // Transform the TikTok data into SocialData format
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
