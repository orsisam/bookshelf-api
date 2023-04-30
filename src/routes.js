import { addBookshelf, getAllBooks } from './handlers.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookshelf,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
];

export default routes;
