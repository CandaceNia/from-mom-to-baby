const { default: PostIndex } = require('../../front-end/src/Pages/Index');
const posts = require('../Controllers/postController');
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

const getPost = async (id) => {
  try {
    return await db.one('SELECT * FROM posts WHERE id=$1', id);
  } catch (err) {
    return err;
  }
};

const createPost = async (post) => {
    try {
        return await db.one (
           ' INSERT INTO posts (name, image, caption) VALUES ($1, $2, $3) RETURNING *'
           [
            post.name,
            post.image,
            post.caption
           ]
        );
    }catch (err) {
        return err
    }
}

const deletePost = async ( id) => {
    try{
        return await db.one("DELETE FROM posts WHERE id=$1 RETURNING *", id)
    }catch (err){
return err
    }
}
module.exports = {
  getAllPosts,
  getPost,
  createPost,
  deletePost
};
