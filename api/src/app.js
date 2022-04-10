import express from 'express';
const app = express();
import cors from 'cors';
import routes from './routes';

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
