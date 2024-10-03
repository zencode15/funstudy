const BlogController = require('../controllers/blogController');

async function blogRoutes(fastify, options) {
    fastify.get('/', BlogController.index);
    fastify.get('/post/:id', BlogController.getPost);
    fastify.post('/api/posts', BlogController.createPost);
}

module.exports = blogRoutes;
