import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: String,
    desc: String,
});

export default mongoose.model('postModel', postSchema);
