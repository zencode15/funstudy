// server.js
const fastify = require('fastify')({ logger: true });
const path = require('path');

// Routes
fastify.get('/', async (request, reply) => {
  reply.type('text/html').send(`
    <html>
      <head><title>Fastify App</title></head>
      <body>
        <h1>Hello, Fastify!</h1>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

// Serve static files (e.g., main.js)
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server running at http://localhost:3000`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
