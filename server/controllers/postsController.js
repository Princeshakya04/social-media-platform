import connection from "../database/db.js";

export const getAllPosts = (req, res) => {
    const query = 'SELECT * FROM posts';
    
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching posts: ', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json(results);
    });

}

export const getPostById = (req, res) => {

}

export const createPost = (req, res) => {
    const { desc, media, user_id } = req.body;

    const query = 'INSERT INTO posts (`desc`, media, user_id, like_count, comment_count, created_at) VALUES (?, ?, ?, 0, 0, NOW())';

    connection.query(query, [desc, media, user_id], (err, results) => {
        if (err) {
            console.error('Error creating post: ', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(201).json({ message: 'Post created successfully' });
    });
};

export const updatePost = (req, res) => {

}

export const deletePost = (req, res) => {
    
} 