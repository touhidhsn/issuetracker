import { z } from 'zod';

export const issueSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  description: z.string().min(1, 'Description is required.').max(655535),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(255, 'Please keep this under 255 letters')
    .optional(),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(655535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, 'Id required')
    .max(255)
    .optional()
    .nullable(),
});
