const numeros = [];
let input;

while (true) {
  input = parseInt(prompt("Digite um número positivo (0 para sair):"));
  if (input === 0) break;
  if (input > 0) numeros.push(input);
}

const qtdNumeros = numeros.length;
const maiorNumero = Math.max(...numeros);
const media = (numeros.reduce((acc, n) => acc + n, 0) / qtdNumeros)


const impares = numeros.filter(n => n % 2 !== 0);
const menorImpar = impares.length > 0 ? Math.min(...impares) : "Nenhum ímpar digitado";

const ocorrencias = {};
numeros.forEach(n => ocorrencias[n] = (ocorrencias[n] || 0) + 1);

console.log(`Quantidade de números lidos: ${qtdNumeros}`);
console.log(`Maior número lido: ${maiorNumero}`);
console.log(`Média dos números lidos: ${media}`);
console.log(`Menor número ímpar lido: ${menorImpar}`);
console.log("Quantidade de ocorrências de cada número:");
for (const [numero, qtd] of Object.entries(ocorrencias)) {
  console.log(`O número ${numero} ocorreu ${qtd} vez(es).`);
}
