import * as z from 'zod';

export const messageSchema = z.object({
  content: z
    .string()
    .min(1, { message: 'Message cannot be empty' })
    .max(500, { message: 'Message is too long (max 500 characters)' }),
});