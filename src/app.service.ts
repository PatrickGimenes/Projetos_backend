import { Injectable } from '@nestjs/common';
import { Person } from './entities/person.entity';

@Injectable()
export class AppService {
  validateData(data: Person) {
    return data;
  }
}
