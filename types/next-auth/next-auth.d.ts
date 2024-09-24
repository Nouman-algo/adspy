// types/next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
  }

  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface Profile {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
  }
}
