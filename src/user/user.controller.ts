import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, CreateUserSchema } from './dto/create-user.dto';
import { ZodValidationPipe } from 'src/pipes/zod.validation/zod.validation.pipe';
import { User } from 'generated/prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateUserSchema))
  async createUser(@Body() userData: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(userData);
    return user;
  }
}
