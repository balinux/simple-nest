import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string(),
  name: z.string().optional(),
});

export class CreateUserDto {
  username: string;
  email: string;
  name: string;
}
