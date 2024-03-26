import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import connection from './database/db.js';

import usersRouter from './routes/usersRoutes.js';
import postsRouter from './routes/postsRoutes.js';
import commentsRouter from './routes/commentsRoutes.js';
import likesRouter from './routes/likesRoutes.js';

const app = express();

app.use(cors());

app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/like', likesRouter)

const PORT = 8000;

app.listen(PORT, () => console.log(`The server is running successfully on PORT ${PORT}`));
