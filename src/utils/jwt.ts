import JWT from 'jsonwebtoken';
import { Userpayload } from '../types/Payload';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('Secret is missing');
}

const token = (payload: Userpayload): string => {
  const createToken = JWT.sign(payload, secret);
  return createToken;
};

export default {
  token,
};