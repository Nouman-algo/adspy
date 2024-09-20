
export interface DateEntry {
    date: string;
  }
  
  export interface PlatformEntry {
    platform: string;
  }
  
  export interface LanguageEntry {
    language: string;
  }
  
  export interface LikeEntry {
    count: number;
  }
  
  export interface CommentEntry {
    count: number;
  }
  
  export interface ShareEntry {
    count: number;
  }
  
  export interface PlayEntry {
    count: number;
  }
  
  export interface DurationEntry {
    duration: number;
  }
  
  export interface StatusEntry {
    status: string;
  }
  
  export interface AudienceRegionEntry {
    region: string;
  }
  
  export interface DescriptionEntry {
    description: string;
  }
  
  export interface HeadingForwardEntry {
    heading_forward: string;
  }
  
  export interface DownloadEntry {
    downloads: number;
  }
  
  export interface CountryEntry {
    country: string;
  }
  
  export interface SocialData {
    dates: DateEntry[];
    platforms: PlatformEntry[];
    languages: LanguageEntry[];
    likes: LikeEntry[];
    comments: CommentEntry[];
    shares: ShareEntry[];
    plays: PlayEntry[];
    duration: DurationEntry[];
    status: StatusEntry[];
    audienceRegions: AudienceRegionEntry[];
    descriptions: DescriptionEntry[];
    headingForwards: HeadingForwardEntry[];
    downloads: DownloadEntry[];
    countries: CountryEntry[];
  }
  