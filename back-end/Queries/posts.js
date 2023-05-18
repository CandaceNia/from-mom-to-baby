const db = require('../db/dbConfig');

// INDEX
const getAllPosts = async () => {
  try {
    const allPosts = await db.any('SELECT * FROM posts');
    return allPosts;
  } catch (err) {
    return err;
  }
};

// SHOW
const getPost = async (id) => {
  try {
    return await db.one('SELECT * FROM posts WHERE id=$1', id);
  } catch (err) {
    return err;
  }
};

// CREATE
const createPost = async (post) => {
  try {
    const newPost = await db.any(
      ' INSERT INTO posts (name, image, caption) VALUES ($1, $2, $3) RETURNING *',
      [post.name, post.image, post.caption,]
    );
    return newPost;
  } catch (err) {
    return err;
  }
};

// UPDATE
const updatePost = async (id, post) => {
  try {
    return await db.one(
      'UPDATE posts SET name=$1, image=$2, caption=$3, WHERE id=$4 RETURNING *',
      [post.name, post.image, post.caption, id]
    );
  } catch (err) {
    return err;
  }
};

// DELETE
const deletePost = async (id) => {
  try {
    return await db.one('DELETE FROM posts WHERE id=$1 RETURNING *', id);
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
