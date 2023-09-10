import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Person } from './entities/person.entity';

@Injectable()
export class AppService {
  validateData(data: Person) {
    if (data.income <= 3000) {
      throw new HttpException('type: PERSONAL interest_rate: 4', HttpStatus.OK);
    }
  }
}
