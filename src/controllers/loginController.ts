import { Request, Response } from 'express';
import serviceLogin from '../services/loginService';

async function userLogin(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const getService = await serviceLogin.loginUser(username, password);

  if (getService.status === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  
  return res.status(200).json(getService.data);
}

export default {
  userLogin,
};