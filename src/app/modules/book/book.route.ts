import express from 'express';
import { BookController } from './book.controller';
const router = express.Router();

router.get('/:id', BookController.getSingleCow);

router.post(
  '/',
  // validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
router.get('/', BookController.getAllCows);

router.delete('/:id', BookController.deleteCow);

router.patch(
  '/:id',
  // validateRequest(BookValidation.updateCowZodSchema),
  BookController.updateCow
);

export const BookRoutes = router;
