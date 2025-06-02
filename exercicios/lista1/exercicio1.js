let numero = Number(prompt("Digite um número: "));
if (numero == 0) {
  console.log('Zero');
} else if (numero % 2 == 0) {
  console.log(`${numero} é par`);
} else {
  console.log(`${numero} é ímpar`);
}