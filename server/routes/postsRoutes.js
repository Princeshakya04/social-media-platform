import express from 'express';

import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/postsController.js';

const postsRouter = express.Router();

postsRouter.get('/', getAllPosts);
postsRouter.get('/:id', getPostById);
postsRouter.post('/', createPost);
postsRouter.put('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

export default postsRouter;