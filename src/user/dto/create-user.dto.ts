import { z } from 'zod';

export const CreateUserSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  email: z.string(),
  name: z.string().min(1, 'Name is required'),
});

export class CreateUserDto {
  username: string;
  email: string;
  name: string;
}
