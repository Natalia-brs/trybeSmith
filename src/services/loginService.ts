import bcrypt from 'bcryptjs';
import { ServiceResponse } from '../types/Response';
import UserModel from '../database/models/user.model';
import JWT from '../utils/jwt';

type LoginResponse = ServiceResponse<{ token: string }>;

async function loginUser(username: string, password: string): Promise<LoginResponse> {
  const getUser = await UserModel.findOne({ where: { username } });
  if (!getUser || !bcrypt.compareSync(password, getUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }
  const token = await JWT.token({
    username: getUser?.dataValues.username,
    password: getUser?.dataValues.password,
  });

  return {
    status: 'SUCCESSFUL',
    data: {
      token,
    },
  };
}

export default {
  loginUser,
};