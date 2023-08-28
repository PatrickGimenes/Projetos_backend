import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

export class CreateUserDto {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
}
