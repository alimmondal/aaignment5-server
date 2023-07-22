import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.get('/:id', UserController.getSingleUser);

router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get('/', UserController.getAllUsers);

router.delete('/:id', UserController.deleteUser);

router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);

export const UserRoutes = router;
