export class SocialMediaError extends Error {
    constructor(message: string, public status: number) {
      super(message);
      this.name = 'SocialMediaError';
    }
  }
  