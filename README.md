Get Started

	Clone este repositório na sua maquina 

Na pasta raiz do projeto rode o comando
```terminal
	npm install
```
Após rode o comando
```terminal
	npm start or yarn add
```
Pronto a aplicação já está rodando se nenhuma porta estiver sendo usada estará disponivel no `http://localhost:5000`
`                   
`
Está documentação se refere ao funcionamento da API , tipo de respostas e detalhes das requisições, os exemplos aqui inseridos pode ser usando a partir das base urls:

`http://localhost:5000/api`  OR `(https://api-desafiovoxusbackend.herokuapp.com/)`

Todo o acesso à API é feito por HTTP e acessado a partir das bases urls. Todos os dados são enviados e recebidos como JSON.

```json
Content-Type: application/json
```

ENDPOINTS

GET `/api/payment` 

Responsável por listar todos os payments cadastrado no banco de dados, não aceita parâmetros  e só retorna um JSON com todos os dados contidos. 

No retorno do corpo `JSON` da chamada GET, conterá um campo de nome `TAXA` que sempre que é feita uma chamada do tipo POST ele obtem o campo `VALOR` e faz uma operação de porcetagem% fixa de 5% no mesmo e retorna a `TAXA` salvando no banco de dados.


POST `/api/payment` 

Aceita como parâmetro um objeto no corpo da requisição e grava no banco de dados os payments 

Para que possa ser gravado corretamente deve ser seguir as instruções abaixo

```json
{
	"title": required,  deve conter entre 5 e 100 caracteres 
	"value": required,  deve ser um valor decimal e não pode ser String
	"date": required,   deve estar no formato (Y-m-d)
	"comment": optional 
}
```

PUT `/api/payment/:id`

Deve ser passado como params da url o `id`  do payment cadastrado e deve ser seguido as mesma instruções do POST para que possa ser atualizado corretamente

DELETE `/api/payment/:id`

Deve ser passado como params da url o `id`  do payment cadastrado

POST `/api/upload`

Para que possa ser feito o upload é requirido que o arquivo seja da extensão `XLSX` qualquer outo arquivo não será processado , o mesmo após ser carregado será convertido em `JSON` e cadastrado no banco de dados e salvo na pasta upload na raiz do projeto

# **Erros**

A API usa códigos de resposta HTTP convencionais para indicar o sucesso ou falha de uma solicitação de API. Em geral: os códigos no intervalo indicam sucesso. Os Tipo de erros no intervalo indicam um erro que falhou, devido às informações fornecidas (por exemplo, um parâmetro necessário foi omitido, algum dado fornecido não passou pelas verificações e  etc.). 

Status: `200`- Ok tudo passo como esperado

Status: `500`- Erros na gravação do banco de dados.

**Tipo de erros**

`title is not correct`  o titulo não está correto, esse erro se referente algum problema na quantidade caractere  informada no campo title

`number is not correct`  o numero não esta no formato correto, isso pode acontecer quando é passado no campo number alguma String ou não for um numero decimal

`the date format cannot be saved`  a data não está no formato correto , isso se da quando a data não está no formato Y-M-D

Obervação: Está API não possui nenhum tipo de autenticação devido ser um API de teste 


