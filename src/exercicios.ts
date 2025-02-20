/* 
Tipagem e Arrays
Exercício 1 - Média de Números
Crie um array de números e uma função que calcule a média dos valores.
*/

let numeros: number[] = [15, 30, 45, 60];

function calculaMedia(valores: number[]): number{
    let soma: number = numeros.reduce((acc, val) => acc + val, 0);
    return soma / valores.length;
}

console.log(`A média dos valores é: ${calculaMedia(numeros)}`);

/* 
Funções Tipadas
Exercício 2 - Função com Parâmetro Opcional
Crie uma função que recebe um nome e um sobrenome (opcional) e retorna o nome completo.
*/

function nomeCompleto(nome: string, sobrenome?: string):string{
    return sobrenome ? `Olá ${nome} ${sobrenome}! Seja bem-vindo.` : `Olá ${nome}! Seja bem-vindo.`
}

console.log(nomeCompleto("Felipe", "Sora"));
console.log(nomeCompleto("Felipe"));

/* 
Classes e Instâncias
Exercício 3 - Classe Produto
Crie uma classe Produto com nome, preço e um método para aplicar desconto.
*/

class Produto{
    nome: string;
    preco: number;

    constructor(nome: string, preco: number){
        this.nome = nome;
        this.preco = preco
    }

    aplicarDesconto(porcentagem: number): void{
        this.preco -= (this.preco * porcentagem) / 100;
    }

    detalhes(): string{
        return `Produto: ${this.nome} | Preço: R$${this.preco}`;
    }
}

const produto = new Produto("Celular", 5000);
produto.aplicarDesconto(15);
console.log(produto.detalhes());
