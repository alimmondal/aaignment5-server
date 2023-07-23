"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_model_1 = require("../book/book.model");
const addCommentToDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield book_model_1.Book.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book Id not found !');
    }
    const result = yield book_model_1.Book.updateOne({ _id: id }, { $push: { comments: payload } });
    console.log(result);
    if (result.modifiedCount !== 1) {
        console.error('Book not found or comment not added');
    }
    return result;
});
// const getAllComments = async (): Promise<IBook[]> => {
//   const result = await Book.find({});
//   return result;
// };
const getSingleComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById({ _id: id }, { _id: 0, comments: 1 });
    return result;
});
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
exports.CommentService = {
    addCommentToDb,
    // getAllComments,
    // updateComment,
    // deleteComment,
    getSingleComment,
};
