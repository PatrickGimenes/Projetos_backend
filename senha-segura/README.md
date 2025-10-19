# Senha segura
Continuando meu aprendizado, implementei a solução para este <a href="https://github.com/backend-br/desafios/blob/master/secure-password/PROBLEM.md">desafio</a> cujo objetivo era criar um serviço que valida se uma senha é considerada segura com base em critérios pré-definidos.

O README do desafio fornece os seguintes requisitos:

### Exemplo

Seu serviço recebe uma chamada para validar uma senha.

**[POST]** `{{host}}/validate-password`

```json
{
    "password": "vYQIYxO&p$yfI^r"
}
```

Se a senha atender a todos os critérios de segurança, então, seu serviço deve retornar uma resposta de sucesso.

```
HTTP/1.1 204 NoContent
```

Caso contrário, retorne uma mensagem informando quais critérios não foram atendidos. Você pode escolher como será sua
estrutura para as mensagens de erro.

```
HTTP/1.1 400 Bad Request
```

```json
{
    ...
}
```

## Requisitos

- Verificar se a senha possui pelo menos 08 caracteres.
- Verificar se a senha contém pelo menos uma letra maiúscula.
- Verificar se a senha contém pelo menos uma letra minúscula.
- Verificar se a senha contém pelo menos um dígito numérico.
- Verificar se a senha contém pelo menos um caractere especial (e.g, !@#$%).

## Rodando Localmente 

</br>

**Clone o repositório**

```
  https://github.com/PatrickGimenes/senha-segura.git
```

Depois execute o seguinte comando

```
  pnpm start:dev
```

Envie um requisição Post com a senha a ser validada

```json
{
    "password": "123!@#As"
}
```

Se a senha cumprir com os resultados será enviado um :

```
HTTP/1.1 204 NoContent
```

Caso a senha não atenda nenhum requisito será enviado a seguinte resposta:

```json
{
	"status": 401,
	"error": "Senha não atende aos critérios de segurança",
	"messages": [
		"A senha deve ter pelo menos 8 caracteres.",
		"A senha deve conter pelo menos uma letra maiúscula.",
		"A senha deve conter pelo menos uma letra minúscula.",
		"A senha deve conter pelo menos um dígito numérico.",
		"A senha deve conter pelo menos um caractere especial."
	]
}
```

## Aprendizado

Para resolver este desafio precisei aprender usar expressões regulares e como enviar códigos http como resposta.

