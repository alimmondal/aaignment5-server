import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();

router.get('/:id', BookController.getSingleBook);

router.post(
  '/',
  // validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
router.get('/', BookController.getAllBooks);

router.delete('/:id', BookController.deleteBook);

router.patch(
  '/:id',
  // validateRequest(BookValidation.updateCowZodSchema),
  BookController.updateBook
);

export const BookRoutes = router;
