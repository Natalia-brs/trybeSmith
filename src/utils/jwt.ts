import JWT from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('Secret não encontrado');
}

type Userpayload = {
  username: string,
  password: string,
};

const token = (payload: Userpayload): string => {
  const createToken = JWT.sign(payload, secret);
  return createToken;
};

export default {
  token,
};