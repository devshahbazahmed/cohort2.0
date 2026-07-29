import { cookies } from 'next/headers';
import { verifyToken } from './jwt';
import { JWTPayload } from '../types/user.types';

async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get('token')?.value;

  if (!token) throw new Error('Token not found');

  const decoded = verifyToken(token) as JWTPayload;

  if (!decoded) throw new Error('Unauthorized');

  return decoded?.userId;
}

export default getCurrentUser;
