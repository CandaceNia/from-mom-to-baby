const express = require('express');
const posts = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
} = require('../Queries/posts');

posts.get('/', async (req, res) => {
  const allPosts = await getAllPosts();
  if (allPosts[0]) {
    res.status(200).json(allPosts);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

posts.get('/:id', async (req, res) => {
  const { id } = req.params;

  const post = await getPost(id);

  if (post.id) {
    res.status(200).json({
      success: true,
      payload: post,
    });
  } else {
    res.status(404).json({
      success: false,
      payload: 'No valid post exists.',
    });
  }
});

//   CREATE
posts.post('/', async (req, res) => {
  const { body } = req;

  const createdPost = await createPost(body);

  if (createdPost.id) {
    res.status(200).json({
      success: true,
      payload: {
        id: createdPost.id,
        name: createdPost.name,
        image: createdPost.image,
        caption: createdPost.caption,
      },
    });
    return;
  }
  res.status(500).json({ error: 'Could not create post.' });
});

// DELETE
posts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedPost = await deletePost(id);
  if (deletedPost.id) {
    res.status(200).json({
      success: true,
      payload: deletedPost,
    });
  } else {
    res.status(404).json({
      success: false,
      payload: { id: undefined },
    });
  }
});

module.exports = posts;
