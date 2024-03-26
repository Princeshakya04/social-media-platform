import connection from "../database/db.js";
import crypto from 'crypto';


export const getAllUsers = (req, res) => {
    connection.query(`SELECT * FROM users`, (err, result) => {
        if (err) {
            console.error('Error fetching users: ', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.status(200).json(result);
    });
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error getting user by ID: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(results[0]);
  });
}

export const createUser = (req, res) => {
    const { username, email, password } = req.body;
    const safePassword = crypto.createHash('md5').update(password).digest('hex');
    connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, safePassword], (err, results) => {
    if (err) {
      console.error('Error creating user: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(201).json({ message: 'User created successfully' });
  });
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    connection.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id], (err, results) => {
    if (err) {
      console.error('Error updating user: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'User updated successfully' });
  });
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Error deleting user: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'User deleted successfully' });
  });
}