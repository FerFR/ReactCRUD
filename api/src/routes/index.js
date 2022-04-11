import { Router } from 'express';
import postController from '../controllers/postController';

const routes = Router();

routes.get('/', postController.index);
routes.post('/', postController.create);
routes.put('/:id?', postController.update);
routes.delete('/:id?', postController.delete);

export default routes;
