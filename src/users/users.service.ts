import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(data: UserDto) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        userDocument: data.userDocument,
      },
    });

    if (userExist) {
      throw new Error('User alredy exists!');
    }
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    const bookExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!bookExist) {
      throw new Error('User does not exists!');
    }

    return bookExist;
  }

  async update(id: string, data: UserDto) {
    const bookExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!bookExist) {
      throw new Error('User does not exists!');
    }
    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    const bookExist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!bookExist) {
      throw new Error('User does not exists!');
    }
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
