function desafioQuadrados(numero) {
   
    if (numero <= 0) {
        console.log("Erro: O número deve ser maior que zero.");
        return;
    }


    const quadrados = [];
    for (let i = numero; i >= 1; i--) {
        quadrados.push(i * i);
    }


    for (let i = 0; i < quadrados.length; i++) {
        
        let linha = quadrados.slice(i).join(' ');
        console.log(linha);
    }
}


desafioQuadrados(10);
