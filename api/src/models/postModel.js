import mongoose, { Schema } from 'mongoose';

const postSchema = Schema({
    title: String,
    desc: String,
});

export default mongoose.model('postModel', postSchema);
