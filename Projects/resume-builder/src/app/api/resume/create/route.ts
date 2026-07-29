import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import getCurrentUser from '@/lib/getCurrentUser';
import ResumeModel from '@/models/resume.model';
import { ApiResponse } from '@/types/api.types';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const userId = await getCurrentUser();

    const newResume = await ResumeModel.create({
      user_id: userId,
      title: '',
      summary: '',
      personalInfo: {},
      workExperience: [],
      projects: [],
      skills: [],
      education: [],
      certifications: [],
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Resume created successfully',
        data: newResume,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(`Error in creating resume, ${error}`);
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'Something went wrong',
      },
      { status: 500 }
    );
  }
}
