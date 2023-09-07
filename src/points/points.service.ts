import { Injectable } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { PrismaService } from 'src/database/prisma';

@Injectable()
export class PointsService {
  constructor(private prisma: PrismaService) {}
  create(createPointDto: CreatePointDto) {
    return 'This action adds a new point';
  }

  findAll() {
    return this.prisma.pOI.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} point`;
  }

  update(id: number, updatePointDto: CreatePointDto) {
    return `This action updates a #${id} point`;
  }

  remove(id: number) {
    return `This action removes a #${id} point`;
  }
}
