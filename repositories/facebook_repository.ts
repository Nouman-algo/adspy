import axios from 'axios';
import { SocialMediaService } from '../services/SocialMediaService';
import { SocialData } from '../types/models_types/social_data_type';
import { SocialMediaError } from '../errors/SocialMediaError';
import { FacebookData } from '../models/socialDataModels'; // Mongoose model
import { getFromCache, setToCache } from '../utils/cache';

export class FacebookRepository implements SocialMediaService {
  private cacheTTL = 3600;  // 1 hour TTL (can be adjusted)

  async fetchData(): Promise<SocialData> {
    // Check if we have cached data in MongoDB
    const cachedData = getFromCache('facebook');
    if (cachedData) return cachedData;

    const latestData = await FacebookData.findOne().sort({ createdAt: -1 });
    if (latestData && (Date.now() - new Date(latestData.createdAt).getTime()) / 1000 < this.cacheTTL) {
        return latestData.toObject() as SocialData;
    }

    // If no cached data or cache expired, fetch from API
    const { FACEBOOK_ACCESS_TOKEN, FACEBOOK_PAGE_ID } = process.env;
    if (!FACEBOOK_ACCESS_TOKEN || !FACEBOOK_PAGE_ID) {
      throw new SocialMediaError('Facebook access token or page ID not configured.', 500);
    }

    try {
      const endpoint = `https://graph.facebook.com/v17.0/${FACEBOOK_PAGE_ID}/insights`;
      const response = await axios.get(endpoint, {
        params: {
          access_token: FACEBOOK_ACCESS_TOKEN,
          metric: 'page_engagement,page_fans',
          period: 'day',
        },
      });

      const data = this.transformData(response.data.data);

      // Store the transformed data in MongoDB
      await FacebookData.create(data);
      setToCache('facebook', data, this.cacheTTL);  // Store in cache

      return data;
    } catch (error: any) {
      throw new SocialMediaError(error.message, error.response?.status || 500);
    }
  }

  private transformData(apiData: any): SocialData {
    // Transform the Facebook data into SocialData format
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
