const express = require('express');
const posts = express.Router();
const {
    getAllPosts,
} = require ('../Queries/posts');

posts.get('/', async (req, res) => {
    const allPosts = await getAllPosts();
    if (allPosts[0]) {
        res.status(200).json(allPosts);
    }else {
        res.status(500).json ({error: 'server error'})
    }
});

module.exports = posts;