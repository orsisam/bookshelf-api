import { server as _server } from '@hapi/hapi';
import routes from './routes.js';

async function init() {
  const server = _server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`);
}

init();
