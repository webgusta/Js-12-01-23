// Calcular a media entre todos os numeros dentro de uma lista de numeros

function mediadalista(lista: number[]): number{
    var numero:number = lista.length
    var soma:number = 0;

    for(let i: number =0; i < numero; i++){
        soma += lista[i];
        //soma = soma + i
    }
    return soma/numero;
}

let lista: number[] = [1,3,9,15,90];
let media: number = mediadalista(lista);
console.log("A média da lista é:", media);