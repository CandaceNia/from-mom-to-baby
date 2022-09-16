const express = require('express');
const posts = express.Router();
const {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require('../Queries/posts');


// INDEX
posts.get('/', async (req, res) => {
  const allPosts = await getAllPosts();
  if (allPosts[0]) {
    res.status(200).json(allPosts);
  } else {
    res.status(500).json({ error: 'server error' });
  }
});

// SHOW
posts.get('/:id', async (req, res) => {
  const { id } = req.params;
  const post = await getPost(id);
if (post.id) {
    res.status(200).json(post);
  } else {
    res.status(404).json({
      success: false,
      payload: 'No valid post exists.',
    });
  }
});

//   CREATE
posts.post('/', 
async (req, res) => {
  try {
    const post = await createPost(id, post);
    res.json({ success: true, payload: post[0] });
  } catch (error) {
    res.status(400).json({ error: "Not created." });
  }
}
);

// UPDATE
posts.put("/:id", async (req, res) => {
    try {
      const post = await updatePost(req.body, req.params.id);
      res.json({ success: true, payload: post });
    } catch (error) {
      res.status(400).json({ success: false, error: "Post was not updated...." });
    }
  }
);


// DELETE
posts.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedPost = await deletePost(id);
  if (deletedPost) {
  if (deletedPost.id) {
    res.status(200).json({
      success: true,
      payload: deletedPost,
    });
  } else {
    res.status(404).json({
      success: false,
      payload: deletedPost
    });
  }
}
});

module.exports = posts;
