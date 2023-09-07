# Pontos de interesse
Continuando meu aprendizado, implementei a solução para este <a href="https://github.com/backend-br/desafios/blob/master/secure-password/PROBLEM.md">desafio</a> cujo objetivo era criar um serviço que receberá uma coordenada X e uma coordenada Y, especificando um ponto de referência, bem como uma distância máxima (d-max) em metros.
O serviço deverá retornar todos os POIs da base de dados que estejam a uma distância menor ou igual a d-max a partir do ponto de referência.

O README do desafio fornece os seguintes requisitos:

## Exemplo

Considere a seguinte base de dados de POIs:

- 'Lanchonete' (x=27, y=12)
- 'Posto' (x=31, y=18)
- 'Joalheria' (x=15, y=12)
- 'Floricultura' (x=19, y=21)
- 'Pub' (x=12, y=8)
- 'Supermercado' (x=23, y=6)
- 'Churrascaria' (x=28, y=2)

Dado o ponto de referência (x=20, y=10) indicado pelo receptor GPS, e uma distância máxima de 10 metros, o serviço deve
retornar os seguintes POIs:

- Lanchonete
- Joalheria
- Pub
- Supermercado

## Requisitos

- Cadastrar pontos de interesse, com 03 atributos: nome do POI, coordenada X (inteiro não negativo)
  e coordenada Y (inteiro não negativo).
- Os POIs devem ser armazenados em uma base de dados.
- Listar todos os POIs cadastrados.
- Listar os POIs por proximidade. Este serviço receberá uma coordenada X e uma coordenada Y, especificando um ponto de
  referência, bem como uma distância máxima (d-max) em metros. O serviço deverá retornar todos os POIs da base de dados
  que estejam a uma distância menor ou igual a d-max a partir do ponto de referência.
## Rodando Localmente 

</br>

**Clone o repositório**

```
  https://github.com/PatrickGimenes/points-of-interest.git
  cd points-of-interest
```

Depois inicie o Prisma

```
  npx prisma generate
```

Depois inicie o serviço

```
  pnpm start:dev
```

Envie um requisição Post com a localização e a distancia máxima/mínima

```json
{	
	"X": 10,
	"Y": 10,
	"distance": 4
}
```
E será retornado todos os pontos de interesse próximos

```json
[
	{
		"id": "4891a9d7-f881-488e-931b-011d66d4f82d",
		"name": "Pub",
		"X": 12,
		"Y": 8
	}
]
```

## Aprendizado

Durante a resolução deste desafio pude aprender mais sobre como fazer buscas no banco de dados e criar rotas.


