import mongoose from 'mongoose';
import { IResume } from '@/types/resume.types';

const resumeSchema = new mongoose.Schema<IResume>(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    summary: {
      type: String,
      required: true,
      default: '',
    },
    personalInfo: {
      type: {
        fullname: String,
        email: String,
        mobile: String,
        location: String,
        github: String,
        linkedIn: String,
        portfolio: String,
      },
      default: {},
    },
    workExperience: {
      type: [
        {
          company: String,
          position: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],
      default: [],
    },
    projects: {
      type: [
        {
          title: String,
          description: String,
          githubUrl: String,
          liveUrl: String,
          techStack: [String],
        },
      ],
      default: [],
    },
    skills: {
      type: [String],
      default: [],
    },
    education: {
      type: [
        {
          institute: String,
          degree: String,
          startDate: String,
          endDate: String,
        },
      ],
      default: [],
    },
    certifications: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const ResumeModel = mongoose.model('Resume', resumeSchema);

export default ResumeModel;
