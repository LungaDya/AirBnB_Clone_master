const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();


server.use(middlewares);

server.db = router.db;

server.use(auth);
server.use(router);

const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`SERVER running on port ${PORT}`);
})
