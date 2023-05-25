import { Router } from 'express';
import loginCOntroller from '../controllers/loginController';
import validate from '../middlewares/validateUser';

const loginRouter = Router();

loginRouter.post('/login', validate.validUser, loginCOntroller.userLogin);

export default loginRouter;