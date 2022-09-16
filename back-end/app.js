const express = require('express');
const app = express();
const cors = require('cors')
const postController = require('./Controllers/postController');

app.use(cors());
app.use(express.json());
app.use('/posts', postController);

app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.get('*', (req, res) => {
    res.status(404).send("This post doesn't exists.");
});

module.exports = app;