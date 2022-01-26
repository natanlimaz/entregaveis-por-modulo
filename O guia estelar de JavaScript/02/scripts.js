/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema númerico
para o sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

let nota = 100
/*Lista com condições das notas, eu poderia colocar também 
cada condição la no if sem precisar das variáveis notaF, notaD...*/

function verificaNota(nota) {
    let notaF = nota < 60
    let notaD = nota < 70
    let notaC = nota < 80
    let notaB = nota < 90
    let notaA = nota <= 100

    let notafinal

    if(notaF){
        notaFinal = "F"
    }
    else if(notaD){
        notaFinal = "D"
    }
    else if(notaC){
        notaFinal = "C"
    }
    else if(notaB){
        notaFinal = "B"
    }
    else if(notaA){
        notaFinal = "A"
    }
    else{
        notaFinal = "Nota inválida, entre com uma nota entre 0 e 100"
    }

    return notaFinal
}

/* pode chaamar a função apenas passando como parâmetro
a nota que deseja verificar */
console.log(verificaNota(75))
