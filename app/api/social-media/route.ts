import { SocialMediaServiceFactory } from '../../../services/SocialMediaServiceFactory';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db_connect';
import { URL } from 'url';

export  async function GET(req: Request) {
  // Connect to MongoDB using dbConnect
  await dbConnect();

  // Parse the URL to extract the query parameter
  const url = new URL(req.url);
  const platform = url.searchParams.get('platform');  // Extract the 'platform' query param
  console.log('platform',platform)

  if (!platform) {
    return NextResponse.json({ error: 'Platform parameter is required' }, { status: 400 });
  }

  try {
    // Get the appropriate service for the platform
    const service = SocialMediaServiceFactory.createService(platform);
    const data = await service.fetchData();

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}
