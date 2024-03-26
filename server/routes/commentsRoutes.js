import express from 'express';

import { getAllCommentsForPost, createCommentForPost, updateComment, deleteComment } from '../controllers/commentsController.js';

const commentsRouter = express.Router();

commentsRouter.get('/:postId/comments', getAllCommentsForPost);
commentsRouter.post('/:postId/comments', createCommentForPost);
commentsRouter.put('/:postId/comments/:commentId', updateComment);
commentsRouter.delete('/:postId/comments/:commentId', deleteComment);

export default commentsRouter;