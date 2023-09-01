import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  validatePassword(@Body('password') password: string): void {
    const isLengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\.:;<>,?]/.test(password);

    if (
      isLengthValid &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialCharacter
    ) {
      // A senha atende a todos os critérios, retornar uma resposta de sucesso.
      return;
    } else {
      // A senha não atende a um ou mais critérios, retornar uma mensagem de erro.
      const errorMessages = [];
      if (!isLengthValid) {
        errorMessages.push('A senha deve ter pelo menos 8 caracteres.');
      }
      if (!hasUpperCase) {
        errorMessages.push(
          'A senha deve conter pelo menos uma letra maiúscula.',
        );
      }
      if (!hasLowerCase) {
        errorMessages.push(
          'A senha deve conter pelo menos uma letra minúscula.',
        );
      }
      if (!hasDigit) {
        errorMessages.push(
          'A senha deve conter pelo menos um dígito numérico.',
        );
      }
      if (!hasSpecialCharacter) {
        errorMessages.push(
          'A senha deve conter pelo menos um caractere especial.',
        );
      }

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Senha não atende aos critérios de segurança',
          messages: errorMessages,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
