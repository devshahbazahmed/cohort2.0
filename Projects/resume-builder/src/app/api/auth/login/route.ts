import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { LoginBody } from '@/types/user.types';
import { ApiResponse } from '@/types/api.types';
import UserModel from '@/models/user.model';
import { generateToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body: LoginBody = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'All fields are required',
        },
        {
          status: 400,
        }
      );
    }

    const existingUser = await UserModel.findOne({
      email,
    });

    if (!existingUser) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'User not found',
        },
        {
          status: 404,
        }
      );
    }

    const matchPassword = existingUser.comparePassword(password);

    if (!matchPassword) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Invalid credentials',
        },
        {
          status: 400,
        }
      );
    }

    const token = generateToken({ userId: existingUser._id.toString() });

    const response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'User logged in successfully',
        data: {
          user: {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            mobile: existingUser.mobile,
          },
        },
      },
      {
        status: 200,
      }
    );

    response.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    console.log(`Error in register api: ${error}`);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'Something went wrong',
        error: {
          error,
        },
      },
      {
        status: 500,
      }
    );
  }
}
