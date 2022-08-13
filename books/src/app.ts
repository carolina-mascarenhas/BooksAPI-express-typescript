import express from 'express';
import 'express-async-errors';
import middlewares from './middlewares';
import routers from './routers';

const app = express();

app.use(express.json());
app.use(routers);
app.use(middlewares.httpErrorMiddleware);

export default app;