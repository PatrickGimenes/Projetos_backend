# Crypto

Procurando por formas de aprender mais sobre desenvolvimento backend encontrei este <a href="https://github.com/backend-br/desafios">repositório</a> que
traz alguns desafios para serem resolvidos.

O desafio que eu escolhi foi o <a href="https://github.com/backend-br/desafios/blob/master/cryptography/PROBLEM.md">Criptografia</a> cujo objetivo é garantir que os campos sensíveis não sejam visíveis diretamente, realizando a criptografia em tempo de execução.

O README do desafio fornece o modelo da tabela e os objetivos a serem realizados:

#### Exemplo de tabela

Considere `userDocument` e `creditCardToken` como campos sensíveis e que devem ser encriptados:

| id | userDocument | creditCardToken | value |
|------|--------------|-----------------|-------|
| 1 | MzYxNDA3ODE4MzM= | YWJjMTIz | 5999 |
| 2 | MzI5NDU0MTA1ODM= | eHl6NDU2 | 1000 |
| 3 | NzYwNzc0NTIzODY= | Nzg5eHB0bw== | 1500 |

onde, na sua entidade:

| Campo | Tipo |
|-----------------|--------|
| id | Long |
| userDocument | String |
| creditCardToken | String |
| value | Long |

1. Faça um CRUD simples, considerando como sensíveis os campos citados acima

2. Use o algoritmo de sua preferência para criptografia. Sugestão: [SHA-512](https://en.wikipedia.org/wiki/SHA-2) ou [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)

3. Caso tenha alguma dúvida na implementação do conversor, procure por `Attribute Converter` na sua linguagem

<h2>
  Para resolver este desafio utilizei as seguintes tecnologias:
  </br>
  </br>
  <div align="center">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=whit">
    <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
  </div>
</h2>


## Rodando Localmente 

</br>

**Clone o repositório**

```
  git clone https://github.com/PatrickGimenes/Crypto.git
```
**OBS: Altere o arquivo ".env.example" para ".env".**

Depois execute o seguinte comando

```
  pnpm start:dev
```

## ToDo

Futuramente quero adicionar as seguintes funcionalidades:
- Adicior testes
- Documentar as rotas com Swagger
- Refatorar o código utilizando arquitetura limpa
## Aprendizado

Com esse projeto pude conhecer mais sobre o Nestjs, como criar um CRUD simples utilizando o Prisma ORM para abstrair a criação de querys SQL, além de conhecer a biblioteca Bcrypt.
