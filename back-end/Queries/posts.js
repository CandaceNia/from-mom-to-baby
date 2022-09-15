const db = require('../db/dbConfig')

// INDEX
const getAllPosts = async () => {
    try {
        const allPosts = await db.any('SELECT * FROM posts');
        return allPosts
    }catch (err) {
        return err
    }
};

const getPost

module.exports = {
    getAllPosts,
}