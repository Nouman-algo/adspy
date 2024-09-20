import mongoose from 'mongoose';

// Define the schema for social media data
const socialDataSchema = new mongoose.Schema({
  dates: [{ date: String }],
  platforms: [{ platform: String }],
  languages: [{ language: String }],
  likes: [{ count: Number }],
  comments: [{ count: Number }],
  shares: [{ count: Number }],
  plays: [{ count: Number }],
  duration: [{ duration: Number }],
  status: [{ status: String }],
  audienceRegions: [{ region: String }],
  descriptions: [{ description: String }],
  headingForwards: [{ heading_forward: String }],
  downloads: [{ downloads: Number }],
  countries: [{ country: String }],
  createdAt: { type: Date, default: Date.now },  // For versioning
});

// Models for each platform
export const PinterestData = mongoose.model('PinterestData', socialDataSchema);
export const FacebookData = mongoose.model('FacebookData', socialDataSchema);
export const TikTokData = mongoose.model('TikTokData', socialDataSchema);
