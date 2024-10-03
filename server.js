const fastify = require('fastify')({ logger: true });
const path = require('path');
const blogRoutes = require('./routes/blogRoutes');

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/'
});

fastify.register(require('@fastify/formbody'));

fastify.register(blogRoutes);

fastify.setViewEngine({
    engine: {
        ejs: require('ejs')
    }
});

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server listening on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
