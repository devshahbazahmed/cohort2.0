import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/types/api.types';
import connectDB from '@/lib/db';
import getCurrentUser from '@/lib/getCurrentUser';
import ResumeModel from '../../../../models/resume.model';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const { resumeId } = await params;

    const resume = await ResumeModel.findOne({
      _id: resumeId,
      user_id: user,
    });

    if (!resume)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Resume not found',
        },
        { status: 404 }
      );

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Resume fetched successfully',
        data: resume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error in getting resume api: ${error}`);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ resumeId: string }> }
) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body = await req.json();

    const { resumeId } = await params;

    const updatedResume = await ResumeModel.findOneAndUpdate(
      {
        _id: resumeId,
        user_id: user,
      },
      {
        $set: body,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedResume)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Updated resume failed to update',
        },
        { status: 400 }
      );

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Resume fetched successfully',
        data: updatedResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error in getting resume api: ${error}`);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
