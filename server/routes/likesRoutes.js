import express from 'express';

import { likeThePost, unlikeThePost } from '../controllers/likesController.js';

const likesRouter = express.Router();

likesRouter.put('/:postId/like', likeThePost);
likesRouter.delete('/:postId/like', unlikeThePost);

export default likesRouter;