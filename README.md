# Valida empréstimos
Solução para o desafio [empréstimo](https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md), onde o objetivo era criar um serviço que retorna uma
resposta contendo o nome do cliente e uma lista de empréstimos aos quais ele tem acesso, com os respectivos tipos e taxas de juros.

Os requisitos para fornecer um empréstimo eram:
- Conceder o empréstimo pessoal se o salário do cliente for igual ou inferior a R$ 3000.
- Conceder o empréstimo pessoal se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver menos de 30
  anos e residir em São Paulo (SP).
- Conceder o empréstimo consignado se o salário do cliente for igual ou superior a R$ 5000.
- Conceder o empréstimo com garantia se o salário do cliente for igual ou inferior a R$ 3000.
- Conceder o empréstimo com garantia se o salário do cliente estiver entre R$ 3000 e R$ 5000, se o cliente tiver
  menos de 30 anos e residir em São Paulo (SP).
  
## Rodando Localmente 

</br>

**Clone o repositório**

```
  https://github.com/PatrickGimenes/valida-emprestimos.git
  cd valida-emprestimos
```

Depois inicie o serviço

```
  pnpm start:dev
```

Envie um requisição Post com os dados do cliente

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Jhon Doe",
  "income": 7000.00,
  "location": "SP"
}
```
E será retornado um json com todos os empréstimos possíveis:

```
HTTP/1.1 200 Ok
```

```json
{
  "customer": "Jhon Doe",
  "loans": [
    {
      "type": "PERSONAL",
      "interest_rate": 4
    },
    {
      "type": "GUARANTEED",
      "interest_rate": 3
    },
    {
      "type": "CONSIGNMENT",
      "interest_rate": 2
    }
  ]
}
```
