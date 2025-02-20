function compactarString(str) {
    if (str.length === 0) return ""; 
  
    let resultado = "";
    let contador = 1;
  
    for (let i = 1; i <= str.length; i++) {

      if (str[i] === str[i - 1]) {
    
        contador++;
      } else {

        resultado += str[i - 1];
        if (contador > 1) resultado += contador;
        contador = 1; 
      }
    }
  
    return resultado;
  }

  const entrada = "RRodddigooo";
  const saida = compactarString(entrada);
  console.log(saida);
  