import postRepository from '../repository/postRepository';

const postController = {
    async index(req, res) {
        let allPosts = await postRepository.readAll();
        res.status(200).json(allPosts);
    },
    async create(req, res) {
        let postCreated = await postRepository.create(req.body);
        if (!postCreated) {
            res.status(400).json({
                name: 'Bad Request',
                message: 'Failed to create post',
                statusCode: 400,
            });
        }

        res.status(200).json(postCreated);
    },
    async update(req, res) {
        let postUpdated = await postRepository.update(req.param.id, req.body);
        if (!postUpdated) {
            res.status(400).json({
                name: 'Bad Request',
                message: 'Failed to update post',
                statusCode: 400,
            });
        }

        res.status(200).json(postUpdated);
    },
    async delete(req, res) {
        let postDeleted = await postRepository.delete(req.param.id);
        if (!postDeleted) {
            res.status(400).json({
                name: 'Bad Request',
                message: 'Failed to delete post',
                statusCode: 400,
            });
        }
        res.status(200).json(postDeleted);
    },
};

export default postController;
