/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IBook } from '../book/book.interface';
import { Book } from '../book/book.model';

const addCommentToDb = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | any> => {
  const isExist = await Book.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book Id not found !');
  }

  const result = await Book.updateOne(
    { _id: Object(id) },
    { $push: { comments: payload } }
  );

  console.log(result);

  if (result.modifiedCount !== 1) {
    console.error('Book not found or comment not added');
  }
  return result;
};

// const getAllComments = async (): Promise<IBook[]> => {
//   const result = await Book.find({});

//   return result;
// };

const getSingleComment = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById({ _id: id }, { _id: 0, comments: 1 });
  return result;
};

// const updateComment = async (
//   id: string,
//   payload: Partial<IBook>
// ): Promise<IBook | null> => {
//   const isExist = await Book.findOne({ _id: id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Book Id not found !');
//   }

//   const result = await Book.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });

//   return result;
// };

// const deleteComment = async (id: string): Promise<IBook | null> => {
//   const result = await Book.findByIdAndDelete(id).populate('user');
//   return result;
// };

export const CommentService = {
  addCommentToDb,
  // getAllComments,
  // updateComment,
  // deleteComment,
  getSingleComment,
};
