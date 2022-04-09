import postModel from '../models/postModel';

const postRepository = {
    async readAll() {
        let allPosts = await postModel.find();
        return allPosts;
    },
    async create(postData) {
        if (!postData.title || !postData.desc) {
            return;
        }
        let postCreated = await postModel.create(postData);
        return postCreated;
    },
    async update(id, postData) {
        if (!postData.title || !postData.desc || id) {
            return;
        }

        let postUpdated = await postModel.findOneAndUpdate(id, {
            title: postData.title,
            desc: postData.desc,
        });

        return postUpdated;
    },
    async delete(id) {
        if (!id) return;

        let postDeleted = await postModel.findByIdAndDelete(id);
        return postDeleted;
    },
};

export default postRepository;
