import { Injectable } from '@nestjs/common';
import { CreatePointDto } from './dto/create-point.dto';
import { PrismaService } from 'src/database/prisma';
import { Point } from './entities/point.entity';

@Injectable()
export class PointsService {
  async findPOI(id: Point) {
    const points = await this.prisma.pOI.findMany({
      where: {
        X: {
          gte: id.X - id.distance,
          lte: id.X + id.distance,
        },
        Y: { gte: id.Y - id.distance, lte: id.Y + id.distance },
      },
    });

    return points;
  }
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePointDto) {
    const point = await this.prisma.pOI.create({
      data,
    });
    return point;
  }

  async findAll() {
    return await this.prisma.pOI.findMany();
  }

  async findOne(id: string) {
    const pointExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!pointExist) {
      throw new Error('Poi does not exist');
    }

    return pointExist;
  }

  async update(id: string, data: CreatePointDto) {
    const pointExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!pointExist) {
      throw new Error('Poi does not exist');
    }

    return await this.prisma.pOI.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    const pointExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!pointExist) {
      throw new Error('Poi does not exist');
    }

    return this.prisma.pOI.delete({
      where: {
        id,
      },
    });
  }
}
