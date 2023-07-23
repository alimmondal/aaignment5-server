import express from 'express';
import { UserController } from './comment.controller';
const router = express.Router();

router.get('/:id', UserController.getSingleComment);

router.post(
  '/:id',
  // validateRequest(CommentValidation.createCommentZodSchema),
  UserController.addComment
);

// router.get('/', UserController.getAllComments);

// router.delete('/:id', UserController.deleteUser);

// router.patch(
//   '/:id',
// validateRequest(UserValidation.updateUserZodSchema),
// UserController.updateUser
// );

export const CommentRoutes = router;
