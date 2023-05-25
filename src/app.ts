import express from 'express';
import productRouter from './routers/ProductRouter';
import loginRouter from './routers/LoginRouter';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(loginRouter);

export default app;
