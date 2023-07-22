/* eslint-disable no-console */
import { Request, RequestHandler, Response } from 'express';

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IBook } from '../book/book.interface';
import { CommentService } from './comment.service';

const addComment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const bookData = req.body.comments;
    const result = await CommentService.addCommentToDb(id, bookData);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Comment created successfully',
      data: result,
    });
  }
);

// const getAllComments = catchAsync(async (req: Request, res: Response) => {
//   const result = await CommentService.getAllComments();

//   sendResponse<IBook[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Comment retrieved successfully !',
//     // meta: result.meta,
//     data: result,
//   });
// });

const getSingleComment = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await CommentService.getSingleComment(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment retrieved successfully !',
    data: result,
  });
});

// const updateUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   const result = await CommentService.updateComment(id, updatedData);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Book updated successfully !',
//     data: result,
//   });
// });

// const deleteUser = catchAsync(async (req: Request, res: Response) => {
//   const id = req.params.id;

//   const result = await CommentService.deleteComment(id);

//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User deleted successfully !',
//     data: result,
//   });
// });

export const UserController = {
  addComment,
  // getAllComments,
  getSingleComment,
  // updateUser,
  // deleteUser,
};
