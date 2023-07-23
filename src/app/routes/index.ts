import express from 'express';
import { BookRoutes } from '../modules/book/book.route';
import { CommentRoutes } from '../modules/comment/comment.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
