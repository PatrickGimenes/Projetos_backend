import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './entities/person.entity';

@Controller('/customer-loans')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(200)
  getHello(@Body() data: Person) {
    return this.appService.validateData(data);
  }
}
