/*
* 1. Interfaces e Tipagem Avançada
* Exercício 1
* Crie uma interface chamada Carro, que contenha as seguintes propriedades:
* marca (string)
* modelo (string)
* ano (number)
* motor (opcional, string)
* Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
* 
* Exercício 2
* Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
* Depois, implemente essa função e teste com diferentes valores.
*/

// ex 1
interface Carro2 {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

const meuCarro: Carro2 = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020,
    motor: "2.0 Flex"
};

console.log(`Marca: ${meuCarro.marca} | Modelo: ${meuCarro.modelo} | Ano: ${meuCarro.ano} | Motor: ${meuCarro.motor}`);

// ex 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 5 x 5 = " + multiplicar(5,5));

/*
* 2. Generics
* Exercício 3
* Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
* Teste a função com um array de números e um array de strings.
* 
* Exercício 4
* Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
* Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).
*/

// ex 3
function inverterArray<T>(lista: T[]): T[] {
    return lista.reverse();
}

const listaNumeros: number[] = [1,2,3,5,6];
const listaPalavras: string[] = ["Olá", "Mundo", "TypeScript"]
console.log("Lista de Números ivertida: ", inverterArray(listaNumeros));
console.log("Lista de Palavras ivertida: ", inverterArray(listaPalavras));

// ex 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string}> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string; }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string; }[] {
        return this.usuarios;
    }
}

const repositorio = new UsuarioRepositorio();
repositorio.salvar({ nome: "Felipe", email: "felipe@email.com"});
repositorio.salvar({ nome: "Anna", email: "anna@email.com"});

console.log("Lista de usuários: ", repositorio.obterTodos());


/* 
* 3. Manipulação Avançada de Tipos
* Exercício 5
* Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
* Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.

* Exercício 6
* Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
* Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.
*/

// ex 5 
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor){
    if (typeof resposta === "string"){
        console.log(`A resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem sucessida? ${resposta == true ? "Sim" : "Não"}`);
    }
}

processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);

// ex 6
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;

const estudante: EstudanteTrabalhador = {
    nome: "Felipe",
    curso: "ADS",
    empresa: "FIAP",
    cargo: "Estagiário"
}
console.log(estudante);
