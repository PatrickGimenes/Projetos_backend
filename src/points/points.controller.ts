import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PointsService } from './points.service';
import { CreatePointDto } from './dto/create-point.dto';
import { Point } from './entities/point.entity';

@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) {}

  @Post()
  create(@Body() createPointDto: CreatePointDto) {
    return this.pointsService.create(createPointDto);
  }

  @Get()
  findAll() {
    return this.pointsService.findAll();
  }

  @Post('points')
  findPOI(@Body() poi: Point) {
    return this.pointsService.findPOI(poi);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointsService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePointDto: CreatePointDto) {
    return this.pointsService.update(id, updatePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointsService.remove(id);
  }
}
