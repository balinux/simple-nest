import { Injectable, NotFoundException } from '@nestjs/common';
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
  // get user by id
  async getUserbyId(id: number): Promise<User> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const user = await this.prismaService.user.create({
      data: userData,
    });
    return user;
  }
}
