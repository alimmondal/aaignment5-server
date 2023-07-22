import { Schema, model } from 'mongoose';
import { BookModel, IBook } from './book.interface';

export const BookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    author: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    publicationDate: {
      type: String,
      // required: true,
    },
    genre: {
      type: String,
      // required: true,
    },
    status: {
      type: Boolean,
    },
    rating: {
      type: Number,
    },
    comments: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Book = model<IBook, BookModel>('Book', BookSchema);
