import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(protected readonly prismaService: PrismaService) {}

  // get all user
  async getAllUsers(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data: userData,
    });
    return user;
  }
}
