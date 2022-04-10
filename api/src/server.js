import mongoose from 'mongoose';
import app from './app';

mongoose
    .connect('mongodb://db:27017')
    .catch((e) => {
        throw new Error(e);
    })
    .finally(() => {
        app.listen(3000);
    });
