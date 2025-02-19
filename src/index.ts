let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);