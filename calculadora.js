let calculadora = {
    sumar:  function(numA, numB) {
        return numA+numB;
    },
    restar: function(numA,numB){
        return numA-numB;
    },
    multiplicar: function(numA,numB){
        return numA*numB;
    },
    dividir: function(numA,numB){
        let resultado;
        if(numB === 0){
            resultado = "Error: El divisor no puede valer cero";
        } else {
            resultado = numA/numB;
        }
        return resultado;
    }
}

console.log(calculadora.sumar(2,6));
console.log(calculadora.restar(2,6));
console.log(calculadora.multiplicar(2,6));
console.log(calculadora.dividir(2,6));
console.log(calculadora.dividir(2,0));