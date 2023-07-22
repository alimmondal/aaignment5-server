import { Model } from 'mongoose';

export type IBook = {
  image?: string;
  title?: string;
  author?: string;
  price?: number;
  publicationDate?: string;
  status?: boolean;
  genre?: string;
  rating?: number;
  comments?: string[];
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
