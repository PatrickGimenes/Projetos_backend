import { Injectable } from '@nestjs/common';
import { CreatePoiDto } from './dto/create-poi.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PoiService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreatePoiDto) {
    const poi = await this.prisma.pOI.create({
      data,
    });
    return poi;
  }

  async findAll() {
    return this.prisma.pOI.findMany();
  }

  async findOne(id: string) {
    const poiExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!poiExist) {
      throw new Error('Poi does not exist');
    }

    return poiExist;
  }

  async update(id: string, data: CreatePoiDto) {
    const poiExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!poiExist) {
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
    const poiExist = await this.prisma.pOI.findUnique({
      where: {
        id,
      },
    });

    if (!poiExist) {
      throw new Error('Poi does not exist');
    }

    return this.prisma.pOI.delete({
      where: {
        id,
      },
    });
  }
}
