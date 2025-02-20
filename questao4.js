const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do arquivo (.txt): ', (nomeArquivo) => {
  // Tenta ler o arquivo informado
  fs.readFile(nomeArquivo, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);cls
      rl.close();
      return;
    }

    const linhas = data.split('\n');
    let maxVogais = {quant: 0};
    let maxConsoantes = {quant : 0};

    linhas.forEach(linha => {
      const qtdVogais = (linha.match(/[aeiouAEIOU]/g) || []).length;
      const qtdConsoantes = (linha.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
      
      if (qtdVogais > maxVogais.quant) {
        maxVogais = { linha, quant: qtdVogais };
      }
      
      if (qtdConsoantes > maxConsoantes.quant) {
        maxConsoantes = { linha, quant: qtdConsoantes };
      }
    });

    console.log(`Linha com mais vogais: "${maxVogais.linha}" (${maxVogais.quant} vogais)`);
    console.log(`Linha com mais consoantes: "${maxConsoantes.linha}" (${maxConsoantes.quant} consoantes)`);

    rl.close();
  });
});
