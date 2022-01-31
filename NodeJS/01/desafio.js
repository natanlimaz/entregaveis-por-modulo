/*
    * Crie 2 arquivos JavaScript.
    * O primeiro, irá exportar uma função chamada getFlag()
    * que receberá um argumento do tipo String
    * Essa função deverá buscar dentro do array process.argv a flag desejada, que é a string, e retornar o valor da flag
    * 
    * O segundo irá importar a função e passar a flag desejada.
    * 
    * Iremos rodar no terminal o segundo arquivo pasando as flags --name e --greeting
    * para que seja impresso no terminal a sausação e o nome da pessoa.
*/

const getFlag = require('./export')

console.log(`Olá ${getFlag('--name')}. ${getFlag('--greeting')}`)

// passa como argmento isso aqui no terminal bash = > node.desafio.js --name "Natan Lima" --greeting "tudo bem com você?" 