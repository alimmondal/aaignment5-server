import { z } from 'zod';
import { breed, category, label, location } from './book.constant';

const updateCowZodSchema = z.object({
  body: z.object({
    name: z.string({}),
    age: z.number().optional(),
    price: z.number().optional(),
    category: z.enum([...category] as [string, ...string[]]).optional(),
    label: z.enum([...label] as [string, ...string[]]).optional(),
    breed: z.enum([...breed] as [string, ...string[]]).optional(),
    location: z.enum([...location] as [string, ...string[]]).optional(),
    user: z.string().optional(),
  }),
});

const createBookZodSchema = z.object({
  body: z.object({
    // cow: z.object({
    title: z.string(),
    author: z.string().optional(),
    price: z.number().optional(),
    publicationDate: z.string(),
    genre: z.string(),
    status: z.boolean(),
    comments: z.string().optional(),
  }),
  // }),
});

export const BookValidation = {
  updateCowZodSchema,
  createBookZodSchema,
};
