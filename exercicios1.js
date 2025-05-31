const prompt = require('prompt-sync')();

// =============================
// 1. VERIFICAR SE NÚMERO É PAR OU ÍMPAR
// =============================

// let numero = Number(prompt("Digite um número: "));
// if (numero == 0) {
//   console.log('Zero');
// } else if (numero % 2 == 0) {
//   console.log(`${numero} é par`);
// } else {
//   console.log(`${numero} é ímpar`);
// }



// =============================
// 2. CLASSIFICAR IDADE
// =============================

// let idade = Number(prompt("Digite sua idade: "));
// if (idade <= 12) {
//   console.log(`Você tem ${idade} e é uma criança`);
// } else if (idade < 18) {
//   console.log(`Você tem ${idade} e é um adolescente`);
// } else if (idade < 60) {
//   console.log(`Você tem ${idade} e é um adulto`);
// } else {
//   console.log(`Você tem ${idade} e é um idoso(a)`);
// }



// =============================
// 3. CLASSIFICAÇÃO DE NOTA
// =============================

// function validaNota() {
//   let nota = Number(prompt("Digite uma nota (de 0 a 10): "));
//   if (nota <= 4) {
//     console.log('REPROVADO');
//   } else if (nota <= 6) {
//     console.log('RECUPERAÇÃO');
//   } else {
//     console.log('APROVADO');
//   }
// }
// validaNota();



// =============================
// 4. MENU INTERATIVO COM SWITCH-CASE
// =============================

// console.log("========== SEJA BEM VINDO ==========");
// console.log("========== 1- FAZER LOGIN ==========");
// console.log("========== 2- CRIAR CONTA ==========");
// console.log("========== 3- SAIR DO APP ==========");

// let op = Number(prompt());

// switch (op) {
//   case 1:
//     console.log('LOGADO');
//     break;
//   case 2:
//     console.log('CRIAR NOVA CONTA');
//     break;
//   case 3:
//     console.log('ATÉ MAIS!');
//     break;
//   default:
//     console.log("DIGITE UMA OPÇÃO VÁLIDA, POR FAVOR");
// }



// =============================
// 5. CÁLCULO DO IMC E CLASSIFICAÇÃO
// =============================

// let peso = Number(prompt("Digite seu peso (em kg): "));
// let altura = Number(prompt("Digite sua altura (em metros): "));

// let imc = peso / (altura * altura);
// console.log("Seu IMC é: " + imc.toFixed(2));

// if (imc < 18.5) {
//   console.log("Classificação: Abaixo do peso");
// } else if (imc >= 18.5 && imc < 24.9) {
//   console.log("Classificação: Peso normal");
// } else if (imc >= 25 && imc < 29.9) {
//   console.log("Classificação: Sobrepeso");
// } else if (imc >= 30 && imc < 34.9) {
//   console.log("Classificação: Obesidade grau I");
// } else if (imc >= 35 && imc < 39.9) {
//   console.log("Classificação: Obesidade grau II");
// } else {
//   console.log("Classificação: Obesidade grau III (obesidade mórbida)");
// }



// =============================
// 6. TIPO DE TRIÂNGULO
// =============================

// let a = Number(prompt("Digite o lado A: "));
// let b = Number(prompt("Digite o lado B: "));
// let c = Number(prompt("Digite o lado C: "));

// if (a < b + c && b < a + c && c < a + b) {
//   if (a == b && b == c) {
//     console.log('É um triângulo equilátero');
//   } else if (a == b || a == c || b == c) {
//     console.log('É um triângulo isósceles');
//   } else {
//     console.log('É um triângulo escaleno');
//   }
// } else {
//   console.log('Você não digitou valores de um triângulo!');
// }



// =============================
// 7. CÁLCULO DO VALOR DAS MAÇÃS
// =============================

// const maca = 0.30;
// const macaDuzia = 0.25;
// let valorMaca;

// let macasCompradas = Number(prompt("Quantas maçãs você deseja? "));
// if (macasCompradas < 12) {
//   valorMaca = macasCompradas * maca;
// } else {
//   valorMaca = macasCompradas * macaDuzia;
// }
// console.log("Suas maçãs dão o total de R$: " + valorMaca.toFixed(2));



// =============================
// 8. ORDEM CRESCENTE ENTRE DOIS NÚMEROS
// =============================

// let n1 = Number(prompt("Digite o primeiro número: "));
// let n2 = Number(prompt("Digite o segundo número: "));

// if (n1 > n2) {
//   console.log("Números em ordem crescente: " + n2 + ", " + n1);
// } else if (n2 > n1) {
//   console.log("Números em ordem crescente: " + n1 + ", " + n2);
// } else {
//   console.log("Os dois números são iguais: " + n1);
// }



// =============================
// 9. CONTAGEM REGRESSIVA DE 10 A 1
// =============================

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }



// =============================
// 10. REPETIR NÚMERO 10 VEZES
// =============================

// let n = Number(prompt("Digite um número: "));
// for (let i = 0; i < 10; i++) {
//   console.log(n);
// }



// =============================
// 11. SOMA DE 5 NÚMEROS
// =============================

// let soma = 0;
// for (let i = 0; i < 5; i++) {
//   let valor = Number(prompt("Digite um número: "));
//   soma += valor;
// }
// console.log("Soma total: " + soma);



// =============================
// 12. TABUADA DE UM NÚMERO
// =============================

// let tabuadaEscolha = Number(prompt("Qual tabuada você quer ver? "));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tabuadaEscolha} x ${i} = ${tabuadaEscolha * i}`);
// }



// =============================
// 13. MÉDIA DE NÚMEROS DECIMAIS ATÉ DIGITAR 0
// =============================

// let soma = 0;
// let contador = 0;

// while (true) {
//   let n = Number(prompt("Digite um numero: (0 para sair)"));
//   if (n === 0) {
//     break;
//   }
//   soma += n;
//   contador++;
// }

// if (contador > 0) {
//   let media = soma / contador;
//   console.log("Media dos numeros digitados é: " + media.toFixed(2));
// } else {
//   console.log("Nenhum numero especificado");
// }



// =============================
// 14. FATORIAL DE UM NÚMERO
// =============================

// let n = Number(prompt("Digite o numero: "));
// let fatorial = 1;
// for (let i = 1; i <= n; i++) {
//   fatorial *= i;
// }

// console.log(`O fatorial de ${n} é ${fatorial}`);



// =============================
// 15. SEQUÊNCIA DE FIBONACCI (10 PRIMEIROS TERMOS)
// =============================

// function tenFibonacci() {
//   let fibonacci = [1, 1]; // começa em 1

//   for (let i = 2; i < 10; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }

//   console.log(fibonacci);
// }

// tenFibonacci();

// console.log(tenFibonacci);