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

    try {
      const response = await axios.get('https://ad-libraries.p.rapidapi.com/meta/page/ads?page_id=434174436675167&platform=facebook', {
        headers: {
          'x-rapidapi-key': 'ae13c0660emsh10d9efe881b5c29p1bde2fjsnf5298b9eccdb',
          'x-rapidapi-host': 'ad-libraries.p.rapidapi.com'
        },
      });

      console.log(response.data);

      // Flatten the nested results array
      const ads = response.data.results.flat(); // Flatten the array of arrays inside `results`

      const data = this.transformData(ads); // Pass the flattened array to transformData

      // Store the transformed data in MongoDB
      await FacebookData.create(data);
      setToCache('facebook', data, this.cacheTTL);  // Store in cache

      return data;
    } catch (error: any) {
      throw new SocialMediaError(error.message, error.response?.status || 500);
    }
  }

  private transformData(apiData: any[]): SocialData {
    return {
      dates: apiData.map((item: any) => ({
        id: item.adid || null,
        date: item.creation_time ? new Date(item.creation_time * 1000).toISOString() : "",  // Fallback to empty string if date is invalid
        startDate: item.startDate ? new Date(item.startDate * 1000).toISOString() : "",  // Fallback to empty string if startDate is invalid
        endDate: item.endDate ? new Date(item.endDate * 1000).toISOString() : "",  // Fallback to empty string if endDate is invalid
      })),
      platforms: apiData.map((item: any) => ({
        id: item.adid || null,
        platform: item.publisherPlatform || [],  // Array of platforms
      })),
      languages: apiData.map(() => ({
        id: null,
        language: "unknown",  // Assuming no language data available
      })),
      likes: apiData.map((item: any) => ({
        id: item.adid || null,
        count: item.page_like_count || 0,
      })),
      comments: apiData.map(() => ({
        id: null,
        count: 0,  // Assuming no direct comment data
      })),
      shares: apiData.map(() => ({
        id: null,
        count: 0,  // Assuming no direct share data
      })),
      plays: apiData.map((item: any) => ({
        id: item.adid || null,
        count: item.impressionsWithIndex?.impressionsIndex || 0,
      })),
      duration: apiData.map(() => ({
        id: null,
        duration: 0,  // No duration data provided
      })),
      status: apiData.map((item: any) => ({
        id: item.adid || null,
        status: item.isActive ? "active" : "inactive",
      })),
      audienceRegions: apiData.map(() => ({
        id: null,
        region: "global",  // No region data, assuming global
      })),
      descriptions: apiData.map((item: any) => ({
        id: item.adid || null,
        description: item.body?.markup?.__html || "No description",
      })),
      headingForwards: apiData.map((item:any) => ({
        id: null,
        heading_forward: item.title||null,  // No heading provided
      })),
      downloads: apiData.map(() => ({
        id: null,
        downloads: 0,  // No download data provided
      })),
      countries: apiData.map(() => ({
        id: null,
        country: "Unknown",  // No country data provided
      })),
      // Adding image and video data
      images: apiData.map((item: any) => ({
        id: item.adid || null,
        image_url: item.snapshot?.images?.[0]?.url || null,  // Assuming snapshot contains image URLs
        image_alt: "No image",  // Alternative text for image
      })),
      videos: apiData.map((item: any) => ({
        id: item.adid || null,
        video_url: item.snapshot?.videos?.[0]?.video_hd_url || item.snapshot?.videos?.[0]?.video_sd_url || null,  // Get the HD or SD URL of the video
        video_thumbnail: item.snapshot?.videos?.[0]?.video_preview_image_url || null,  // Thumbnail for video
      })),
    };
  }
}
