import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  price: number;
  publicationDate: string;
  status?: boolean;
  genre: string;
  rating?: number;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchTerm?: string;
  author?: string;
  publicationDate?: string;
  price?: number;
  genre?: string;
  title?: string;
  rating?: number;
};
