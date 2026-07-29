import mongoose, { Document } from 'mongoose';
import { IUser } from '@/types/user.types';
import bcrypt from 'bcryptjs';

interface UserDocument extends Omit<IUser, '_id'>, Document {
  comparePassword(candidatePassword: string): boolean;
}

const userSchema = new mongoose.Schema<UserDocument>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [6, 'Password must be of atleast 6 characters'],
    },
    mobile: {
      type: String,
      optional: true,
      maxLength: [10, 'Maximum 10 characters required'],
      minLength: [10, 'Minimum 10 characters required'],
    },
  },
  { timestamps: true }
);

userSchema.pre('save', function (): void {
  if (!this.isModified('password')) return;
  this.password = bcrypt.hashSync(this.password, 10);
});

userSchema.methods.comparePassword = function (
  candidatePassword: string
): boolean {
  return bcrypt.compareSync(candidatePassword, this.password);
};

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;
