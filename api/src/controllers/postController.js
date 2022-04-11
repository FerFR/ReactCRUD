import postModel from '../models/postModel';
import { OK, BAD_REQUEST, CREATED, NOT_FOUND } from '../utils/http';
import { isValidObjectId } from 'mongoose';

const postController = {
    async index(req, res) {
        const allPosts = await postModel.find();
        res.status(200).json(OK('All Posts Retrieved Successfully', allPosts));
    },

    async create(req, res) {
        const data = req.body;

        if (!data.title) {
            res.status(400).json(BAD_REQUEST('Title is missing or is invalid'));
            return;
        }

        if (!data.desc) {
            res.status(400).json(
                BAD_REQUEST('Description is missing or is invalid')
            );
            return;
        }

        const newPost = await postModel.create(data);
        res.status(201).json(CREATED('Post Created Successfully', newPost));
    },
    async update(req, res) {
        let id = req.params.id;
        let data = req.body;

        if (!id || !isValidObjectId(id)) {
            res.status(404).json(NOT_FOUND('Post Not Found'));
            return;
        }

        let postExists = await postModel.exists({ _id: id });
        if (!postExists) {
            res.status(400).json(NOT_FOUND('Post Not Found'));
            return;
        }

        if (!data || data.title === '' || data.desc === '') {
            res.status(400).json(BAD_REQUEST('New Post Data is Missing'));
            return;
        }
        let postUpdated = await postModel.findByIdAndUpdate(id, data, {
            returnDocument: 'after',
        });

        res.status(200).json(OK('Post Updated Successfully', postUpdated));
    },

    async delete(req, res) {
        let id = req.params.id;

        if (!id || !isValidObjectId(id)) {
            res.status(404).json(NOT_FOUND('Post Not Found'));
            return;
        }

        let postExists = await postModel.exists({ _id: id });
        if (!postExists) {
            res.status(400).json(NOT_FOUND('Post Not Found'));
            return;
        }

        let postDeleted = await postModel.findByIdAndDelete(id);

        res.status(200).json(OK('Post Deleted Successfully'));
    },
};

export default postController;
