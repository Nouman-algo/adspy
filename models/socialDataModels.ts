import mongoose from 'mongoose';

// Define the schema for social media data
const socialDataSchema = new mongoose.Schema({
  dates: [{
    id: String,  // Add id for each date entry
    date: String,
    startDate: String,
    endDate: String
  }],
  platforms: [{
    id: String,  // Add id for each platform entry
    platform: [String]  // Platform can be an array of strings
  }],
  languages: [{
    id: String,  // Add id for each language entry
    language: String
  }],
  likes: [{
    id: String,  // Add id for each like entry
    count: Number
  }],
  comments: [{
    id: String,  // Add id for each comment entry
    count: Number
  }],
  shares: [{
    id: String,  // Add id for each share entry
    count: Number
  }],
  plays: [{
    id: String,  // Add id for each play entry
    count: Number
  }],
  duration: [{
    id: String,  // Add id for each duration entry
    duration: Number
  }],
  status: [{
    id: String,  // Add id for each status entry
    status: String
  }],
  audienceRegions: [{
    id: String,  // Add id for each audience region entry
    region: String
  }],
  descriptions: [{
    id: String,  // Add id for each description entry
    description: String
  }],
  headingForwards: [{
    id: String,  // Add id for each heading forward entry
    heading_forward: String
  }],
  downloads: [{
    id: String,  // Add id for each download entry
    downloads: Number
  }],
  countries: [{
    id: String,  // Add id for each country entry
    country: String
  }],
  images: [{
    id: String,  // Add id for each image entry
    image_url: String,
    image_alt: String
  }],
  videos: [{
    id: String,  // Add id for each video entry
    video_url: String,
    video_thumbnail: String
  }],
  createdAt: { type: Date, default: Date.now },  // For versioning
});

// Check if the model already exists, if not, define it
export const FacebookData = mongoose.models.FacebookData || mongoose.model('FacebookData', socialDataSchema);
export const TikTokData = mongoose.models.TikTokData || mongoose.model('TikTokData', socialDataSchema);
