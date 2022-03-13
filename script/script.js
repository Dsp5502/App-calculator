//*IDs  BOTONES
const pantalla = document.getElementById('pantalla');

const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num0 = document.getElementById('0');
const suma = document.getElementById('+');
const resta = document.getElementById('-');
const division = document.getElementById('/');
const multiplicar = document.getElementById('x');
const punto = document.getElementById('.');
const igual = document.getElementById('igual');
const reset = document.getElementById('reset');
const del = document.getElementById('del');

//*CARGA INICIAL PAG
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  pantalla.value = '';
  multiplicar.disabled = true;
  suma.disabled = true;
  division.disabled = true;
});

//*MUESTRA CADA VALOR INGRESADO EN EL DISPLAY
const mostrarOperacion = (valor) => {
  valor.addEventListener('click', () => {
    let valorIng = valor.value.toString();
    if (
      valorIng === '-' ||
      valorIng === '/' ||
      valorIng === '*' ||
      valorIng === '+'
    ) {
      operacionCalcular = document.getElementById('pantalla').value +=
        valor.value.toString();
      multiplicar.disabled = true;
      suma.disabled = true;
      resta.disabled = true;
      division.disabled = true;
    } else {
      operacionCalcular = document.getElementById('pantalla').value +=
        valor.value.toString();
      console.log(operacionCalcular);
      multiplicar.disabled = false;
      suma.disabled = false;
      resta.disabled = false;
      division.disabled = false;
    }
  });
};

//* BOTON IGUAL '='
const calcularOperacion = (valor) => {
  valor.addEventListener('click', () => {
    let operacion = document.getElementById('pantalla').value;
    if (
      operacion[operacion.length - 1] === '-' ||
      operacion[operacion.length - 1] === '/' ||
      operacion[operacion.length - 1] === '+' ||
      operacion[operacion.length - 1] === '*'
    ) {
      document.getElementById('pantalla').value = 'Syntax ERROR';
    }

    let operacionCal = eval(operacion);
    if (operacionCal === undefined) {
      document.getElementById('pantalla').value = '';
    } else {
      document.getElementById('pantalla').value = operacionCal;
    }
  });
};

//* RESET
reset.addEventListener('click', () => {
  pantalla.value = '';
  multiplicar.disabled = false;
  suma.disabled = false;
  resta.disabled = false;
  division.disabled = false;
});

//* BORRA X EL ULTIMO VALOR INGRESADO
del.addEventListener('click', () => {
  let value = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = value.substr(0, value.length - 1);
  multiplicar.disabled = false;
  suma.disabled = false;
  resta.disabled = false;
  division.disabled = false;
});

mostrarOperacion(num7);
mostrarOperacion(num8);
mostrarOperacion(num9);
mostrarOperacion(num4);
mostrarOperacion(num5);
mostrarOperacion(num6);
mostrarOperacion(num1);
mostrarOperacion(num2);
mostrarOperacion(num3);
mostrarOperacion(num0);
mostrarOperacion(suma);
mostrarOperacion(resta);
mostrarOperacion(division);
mostrarOperacion(multiplicar);
mostrarOperacion(punto);

calcularOperacion(igual);
