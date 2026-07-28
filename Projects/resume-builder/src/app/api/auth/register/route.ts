import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { RegisterBody } from '@/types/user.types';
import { ApiResponse } from '@/types/api.types';
import UserModel from '@/models/user.model';
import { generateToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body: RegisterBody = await req.json();

    const { name, email, password, mobile } = body;

    if (!name || !email || !password) {
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

    if (existingUser) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'User already exists',
        },
        {
          status: 409,
        }
      );
    }

    const user = await UserModel.create({
      name,
      email,
      password,
      mobile,
    });

    const token = generateToken({ userId: user._id.toString() });

    const response = NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'User registered successfully',
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
          },
        },
      },
      {
        status: 201,
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
