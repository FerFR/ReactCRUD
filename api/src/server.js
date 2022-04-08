import express from 'express';
import mongoose from 'mongoose';
const app = express();
import routes from './routes';
import cors from 'cors';
import errorHandler from './errors/errorHandler';

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

mongoose
    .connect('mongodb://db:27017')
    .catch((e) => {
        throw new Error(e);
    })
    .finally(() => {
        app.listen(3000);
    });
