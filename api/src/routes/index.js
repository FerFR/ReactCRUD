import { Router } from 'express';
import postModel from '../model/postModel';
const routes = Router();

routes.get('/', async (req, res) => {
    let allPosts = await postModel.find();
    res.status(200).json(allPosts);
});

export default routes;
