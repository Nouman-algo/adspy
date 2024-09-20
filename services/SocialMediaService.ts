// SocialMediaService.ts
import { SocialData } from '../types/models_types/social_data_type';

export interface SocialMediaService {
  fetchData(): Promise<SocialData>;  // The method to fetch social media data
}
