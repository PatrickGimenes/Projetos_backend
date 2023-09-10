import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './entities/person.entity';

@Controller('/customer-loans')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() data: Person) {
    return this.appService.validateData(data);
  }
}
