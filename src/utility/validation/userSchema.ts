import { z } from "zod";
const userValidation = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(50, "Title must be less than 50 characters"),
  completed: z.boolean().default(false),
});

export { userValidation };
export type UserSchema = z.infer<typeof userValidation>;
