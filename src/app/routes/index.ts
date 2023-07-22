import express from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { UserRoutes } from '../modules/user/user.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/comment',
    route: UserRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
