import { FacebookRepository } from '../repositories/facebook_repository';
import { TikTokRepository } from '../repositories/tiktok_repository';

export class SocialMediaServiceFactory {
  static createService(platform: string) {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return new FacebookRepository();
      case 'tiktok':
        return new TikTokRepository();
      default:
        throw new Error('Unknown platform');
    }
  }
}
