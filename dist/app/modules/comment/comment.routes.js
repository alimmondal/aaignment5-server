"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("./comment.controller");
const router = express_1.default.Router();
router.get('/:id', comment_controller_1.UserController.getSingleComment);
router.post('/:id', 
// validateRequest(CommentValidation.createCommentZodSchema),
comment_controller_1.UserController.addComment);
// router.get('/', UserController.getAllComments);
// router.delete('/:id', UserController.deleteUser);
// router.patch(
//   '/:id',
// validateRequest(UserValidation.updateUserZodSchema),
// UserController.updateUser
// );
exports.CommentRoutes = router;
