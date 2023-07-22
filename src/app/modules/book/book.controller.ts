import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';

import { bookFilterableFields } from './book.constant';
import { IBook } from './book.interface';
import { BookService } from './book.service';

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const book = req.body;
    const result = await BookService.createBookToDb(book);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Cow created successfully',
      data: result,
    });
  }
);

const getAllCows = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getAllCows(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.getSingleCow(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow retrieved successfully !',
    data: result,
  });
});

const updateCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await BookService.updateCow(id, updatedData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow updated successfully !',
    data: result,
  });
});

const deleteCow = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await BookService.deleteCow(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow deleted successfully !',
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
};
