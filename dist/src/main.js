"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("START");
const connection = (0, pg_promise_1.default)()("postgres://postgres:duppoe@localhost:5432/cleanarchdb");
const query = connection
    .query("select * from products.product_transaction")
    .then((res) => console.log(res));
console.log("END", process.env.DB_URI);
/*
createOrder()
 */
/*

1 - Deve criar um pedido com 3 produtos (com descrição, preço e quantidade) e calcular o valor total
2 - Deve criar um pedido com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre o total do pedido)
3 - Não deve criar um pedido com cpf inválido (lançar algum tipo de erro)


Considere


Utilizar e refatorar o algoritmo de validação de cpf: https://github.com/rodrigobranas/cccat7_refactoring/blob/master/src/example2/cpfBefore.ts

Sugestões


Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos implementar juntos na aula seguinte com influências de DDD e Clean Architecture
Utilize a sua linguagem e biblioteca de teste de sua preferência
Devem existir no mínimo 2 arquivos, um de teste e outro que é a aplicação
Como mecanismo de persistência você pode utilizar um banco de dados, um array em memória, um arquivo, qualquer coisa que desejar
Como entrada você pode utilizar uma API HTTP, um CLI ou qualquer outro mecanismo que permita a entrada dos dados
Tente seguir com disciplina, criando primeiro um teste que falha, depois fazendo e teste passar e refatorando

*/
