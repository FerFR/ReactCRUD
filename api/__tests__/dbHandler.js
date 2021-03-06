import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod;

export const connect = async () => {
    mongod = await MongoMemoryServer.create();
    let uri = mongod.getUri();
    await mongoose.connect(uri);
};

export const close = async () => {
    if (mongod) {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongod.stop();
    }
};

export const clear = async () => {
    if (mongod) {
        const collections = mongoose.connection.collections;

        for (let key in collections) {
            let collection = collections[key];
            await collection.deleteMany();
        }
    }
};
