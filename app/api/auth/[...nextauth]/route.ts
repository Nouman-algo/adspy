import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';

// Define the NextAuth options separately
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

// Create the NextAuth handler
const handler = NextAuth(authOptions);

// Export HTTP method handlers for Next.js API route compatibility
export { handler as GET, handler as POST };
