import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validatePassword(pwd: string): string[] {
    const isLengthValid = pwd.length >= 8;
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasDigit = /\d/.test(pwd);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\.:;<>,?]/.test(pwd);

    if (
      isLengthValid &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigit &&
      hasSpecialCharacter
    ) {
      // Se a senha atende a todos os critérios, retornar uma resposta de sucesso.
      throw new HttpException(
        'A senha atende a todos os critérios',
        HttpStatus.NO_CONTENT,
      );
    } else {
      // Se a senha não atende a um ou mais critérios, retornar uma mensagem de erro.
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
          status: HttpStatus.UNAUTHORIZED,
          error: 'Senha não atende aos critérios de segurança',
          messages: errorMessages,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
