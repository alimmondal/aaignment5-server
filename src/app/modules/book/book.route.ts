import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();

router.get('/:id', BookController.getSingleBook);

router.get('/', BookController.getAllBooks);

router.delete('/:id', BookController.deleteBook);

router.patch(
  '/:id',
  // validateRequest(BookValidation.updateCowZodSchema),
  BookController.updateBook
);

router.post(
  '/',
  // validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
export const BookRoutes = router;
