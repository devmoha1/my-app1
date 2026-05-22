import { cookies } from 'next/headers';
import { SessionUser } from '@/types';
import { verifyToken, decodeToken } from './jwt';

const SESSION_COOKIE_NAME = 'auth_token';

export const setAuthCookie = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
};

export const getAuthToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE_NAME)?.value || null;
};

export const getSession = async (): Promise<SessionUser | null> => {
  const token = await getAuthToken();
  if (!token) return null;

  const user = verifyToken(token);
  return user;
};

export const removeAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
};
