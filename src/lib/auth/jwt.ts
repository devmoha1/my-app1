import jwt from 'jsonwebtoken';
import { SessionUser } from '@/types';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export const generateToken = (user: SessionUser): string => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

export const verifyToken = (token: string): SessionUser | null => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as SessionUser;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string) => {
  try {
    return jwt.decode(token) as SessionUser | null;
  } catch (error) {
    return null;
  }
};
