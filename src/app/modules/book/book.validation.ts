import { z } from 'zod';

const updateCowZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string().optional(),
    price: z.number().optional(),
    publicationDate: z.string(),
    genre: z.string(),
    status: z.boolean(),
    comments: z.string().optional(),
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
