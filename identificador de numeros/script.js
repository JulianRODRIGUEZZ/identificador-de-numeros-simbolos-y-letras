function validarCaracter(event) {
    var charCode = event.which || event.keyCode;
    var charStr = String.fromCharCode(charCode);
    if (isNaN(charStr)) {
      if (isLetter(charStr)) {
        console.log('Letra ingresada');
        document.write('ingresaste una letra')
      } else if (isSymbol(charStr)) {
        console.log('Símbolo ingresado');
        document.write('ingresaste un simbolo')
      }
    } else {
      console.log('Número ingresado');
      document.write('ingresaste un numero')
    }
  }
  
  function isLetter(c) {
    return c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z';
  }
  
  function isSymbol(c) {
    return !isLetter(c) && !isDigit(c);
  }
  
  function isDigit(c) {
    return c >= '0' && c <= '9';
    
  }