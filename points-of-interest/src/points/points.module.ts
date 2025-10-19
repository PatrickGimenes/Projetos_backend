import { Module } from '@nestjs/common';
import { PointsService } from './points.service';
import { PointsController } from './points.controller';
import { PrismaService } from 'src/database/prisma';

@Module({
  controllers: [PointsController],
  providers: [PointsService, PrismaService],
})
export class PointsModule {}
