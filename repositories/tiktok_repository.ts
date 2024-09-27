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

    try {
      const response = await axios.get('https://ad-libraries.p.rapidapi.com/tiktok/search?query=all&country_code=all', {
        headers: {
          'x-rapidapi-key': 'e5eb957b3dmshaa99b869b1c33aap1aeb24jsnc1496afc7785', // Add your RapidAPI key here
          'x-rapidapi-host': 'ad-libraries.p.rapidapi.com'
        },
      });

      console.log(response.data); // Log the entire response to verify structure

      // Pass the 'data' field from the response to transformData, which contains the ad data
      const data = this.transformData(response.data.data); 

      // Store the transformed data in MongoDB
      await TikTokData.create(data);
      setToCache('tiktok', data, this.cacheTTL);  // Store in cache

      return data;
    } catch (error: any) {
      throw new SocialMediaError(error.message, error.response?.status || 500);
    }
  }

  private transformData(apiData: any[]): SocialData {
    return {
      dates: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          date: new Date(item.first_shown_date).toISOString(),  // Convert Date to ISO string
          startDate: new Date(item.first_shown_date).toISOString(),  // Convert Date to ISO string
          endDate: item.last_shown_date ? new Date(item.last_shown_date).toISOString() : null,  // Convert Date to ISO string or null
      })),
      platforms: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          platform: "tiktok",  // Since it's TikTok data
      })),
      languages: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          language: "unknown",  // Assuming no language data available
      })),
      likes: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          count: 0,  // No direct like count provided
      })),
      comments: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          count: 0,  // No direct comment count provided
      })),
      shares: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          count: 0,  // No direct share count provided
      })),
      plays: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          count: item.impression || 0,  // Assuming impression represents plays
      })),
      duration: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          duration: 0,  // No duration data provided
      })),
      status: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          status: item.audit_status === '1' ? "active" : "inactive",
      })),
      audienceRegions: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          region: "global",  // No region data, assuming global
      })),
      descriptions: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          description: item.name || "No description",  // Using the name field as the description
      })),
      headingForwards: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          heading_forward: item.title||null,  // No heading provided
      })),
      downloads: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          downloads: 0,  // No download data provided
      })),
      countries: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          country: "Unknown",  // No country data provided
      })),
      // Adding image and video data directly with the ID
      images: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          image_url: item.image_urls?.[0] || null,  // Get the first image URL if available
          image_alt: "No image",  // No alternative text provided, so a default value
      })),
      videos: apiData.map((item: any) => ({
          id: item.id || null,  // Add the ad ID here
          video_url: item.videos?.[0]?.video_url || null,  // Get the first video URL
          video_thumbnail: item.videos?.[0]?.cover_img || null,  // Get the cover image as a thumbnail
      })),
    };
  }
  
}
