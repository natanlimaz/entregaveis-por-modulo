/* ### Sistema de gastos familiar

    Crie um objeto que possuirá duas propriedades, ambas do tipo
    array:
        * receitas: []
        * despesas: []
        
    Agora crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a familia está com
    saldo positivo ou negativo, seguido do valor do saldo

*/



//objeto
 let familia = {
    receitas: [2200, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00, 2000],
}

// funçao somaVetor é responsável por calcular
//o total de receita e despesa para no fim subtraí-los
function somaVetor(vect){
    let soma = 0
    for(let i=0; i<vect.length; i++){
        soma += vect[i]
    }
    return soma
}

// funçao ira subtrair o total de receita com o total de despesas
// depois ira verificar se o saldo sera positivo ou negativo
function totalReceitasDespesas(receitas, despesas) {
    const total = somaVetor(receitas) - somaVetor(despesas)
    let situacao
    if(total >= 0){
        situacao = "Saldo positivo"
    }
    else{
        situacao = "Saldo negativo"
    }
    console.log(`saldo: ${total.toFixed(2)}`)
    return situacao
}


// ira chamar a funcao total receitas passando como parâmetro
// os dois Arrays do objeto
console.log(totalReceitasDespesas(familia.receitas, familia.despesas))