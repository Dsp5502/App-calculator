const form = document.getElementById('form');
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

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  pantalla.value = '';
});

const mostrarOperacion = (valor) => {
  valor.addEventListener('click', () => {
    operacionCalcular = document.getElementById('pantalla').value +=
      valor.value.toString();
    console.log(operacionCalcular);
  });
};

const mostrarResultado = (operacion) => {
  const operacionFinal = eval(operacion);
  console.log(operacionFinal);
};

const calcularOperacion = (valor) => {
  valor.addEventListener('click', () => {
    let operacion = document.getElementById('pantalla').value;
    let operacionCal = eval(operacion);
    console.log(operacionCal);
    document.getElementById('pantalla').value = operacionCal;
  });
};

reset.addEventListener('click', () => {
  pantalla.value = '';
});

del.addEventListener('click', () => {
  let value = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = value.substr(0, value.length - 1);
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

// ------------temas----------------------------------------------------

const tema2 = document.getElementById('tema_2');
tema2.addEventListener('click', () => {
  console.log('tema2');
  const body = document.querySelector('body');
  body.classList.add('active2');
  body.classList.remove('active1');
  body.classList.remove('active3');
});

const tema1 = document.getElementById('tema_1');
tema1.addEventListener('click', () => {
  console.log('tema1');
  const body = document.querySelector('body');
  body.classList.add('active1');
  body.classList.remove('active2');
  body.classList.remove('active3');
});

const tema3 = document.getElementById('tema_3');
tema3.addEventListener('click', () => {
  console.log('tema3');
  const body = document.querySelector('body');
  body.classList.add('active3');
  body.classList.remove('active2');
});
