const PostModel = require('../models/postModel');

const BlogController = {
    index(req, reply) {
        const posts = PostModel.getAllPosts();
        reply.view('/views/index.ejs', { posts });
    },
    getPost(req, reply) {
        const post = PostModel.getPostById(parseInt(req.params.id));
        reply.view('/views/post.ejs', { post });
    },
    createPost(req, reply) {
        const { title, content } = req.body;
        const newPost = PostModel.createPost(title, content);
        reply.send(newPost);
    }
};

module.exports = BlogController;
