import { NextRequest, NextResponse } from 'next/server';
import AuthService from '../../../../services/auth_service';
import dbConnect from '../../../../lib/db_connect';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { email } = await req.json();
    const authService = new AuthService();
    await authService.forgotPassword(email);

    return NextResponse.json({ message: 'Reset password link sent to your email' }, { status: 200 });
  } catch (error) {
    let errorMessage = 'An unexpected error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
