import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose
    .connect('mongodb://db:27017')
    .catch((e) => {
        throw new Error(e);
    })
    .finally(() => {
        app.listen(3000);
    });
