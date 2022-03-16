const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
  soma(num1, num2){
    const validateNum = validate({ num1, num2 }, CalculadoraConstraint.calculadoraConstraint);
    if(validateNum !== undefined){
      return 'Error';
    }
    var so = num1 + num2;
    return so;
  },
  subt(num1, num2){
    const validateNum = validate({ num1, num2 }, CalculadoraConstraint.calculadoraConstraint);
    if(validateNum !== undefined){
      return 'Error';
    }
    var su = num1 - num2;
    return su;
  },
  mult(num1, num2){
    const validateNum = validate({ num1, num2 }, CalculadoraConstraint.calculadoraConstraint);
    if(validateNum !== undefined){
      return 'Error';
    }
    var mu = num1 * num2;
    return mu;
  },
  divi(num1, num2){
    const validateNum = validate({ num1, num2 }, CalculadoraConstraint.calculadoraConstraint);
    if(validateNum !== undefined){
      return 'Error';
    }
    if(num2 === 0){
      return console.log('Divisão por zero!!!!!')
    }
    var di = num1 / num2;
    return di;
  },
  pote(num1, num2){
    const validateNum = validate({ num1, num2 }, CalculadoraConstraint.calculadoraConstraint);
    if(validateNum !== undefined){
      return 'Error';
    }
    var po = num1 ** num2;
    return po;
  }
};

module.exports = Calculadora;
