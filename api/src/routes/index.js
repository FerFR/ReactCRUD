import { Router } from 'express';
import postController from '../controllers/postController';

const routes = Router();

routes.get('/', postController.index);
routes.post('/', postController.create);
routes.put('/', postController.update);
routes.delete('/', postController.delete);

export default routes;
