import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Person } from './entities/person.entity';

@Injectable()
export class AppService {
  validateData(data: Person) {
    const loans = [];
    if (data.income <= 3000) {
      loans.push({
        type: 'PERSONAL',
        interest_rate: 4,
      });
    }
    // Empréstimo pessoal: Taxa de juros de 4%.
    // Empréstimo consignado: Taxa de juros de 2%.
    // Empréstimo com garantia: Taxa de juros de 3%.
    if (
      data.income >= 3000 ||
      data.income <= 5000 ||
      data.location === 'SP' ||
      +data.age <= 30
    ) {
      loans.push({
        type: 'PERSONAL',
        interest_rate: 4,
      });
    }
    if (data.income >= 5000) {
      loans.push({
        type: 'CONSIGNMENT',
        interest_rate: 2,
      });
    }
    if (data.income <= 3000) {
      loans.push({ type: 'GUARANTEED', interest_rate: 3 });
    }
    if (
      data.income >= 3000 ||
      data.income <= 5000 ||
      data.location === 'SP' ||
      +data.age <= 30
    ) {
      loans.push({
        type: 'GUARANTEED',
        interest_rate: 3,
      });
    }

    throw new HttpException(
      {
        costumer: data.name,
        messages: loans,
      },
      HttpStatus.OK,
    );
  }
}
