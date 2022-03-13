//* ------------Temas----------------------------------------------------

const tema1 = document.getElementById('tema_1');
const tema2 = document.getElementById('tema_2');
const tema3 = document.getElementById('tema_3');

tema2.addEventListener('click', () => {
  console.log('tema2');
  const body = document.querySelector('body');
  body.classList.add('active2');
  body.classList.remove('active1');
  body.classList.remove('active3');
});

tema1.addEventListener('click', () => {
  console.log('tema1');
  const body = document.querySelector('body');
  body.classList.add('active1');
  body.classList.remove('active2');
  body.classList.remove('active3');
});

tema3.addEventListener('click', () => {
  console.log('tema3');
  const body = document.querySelector('body');
  body.classList.add('active3');
  body.classList.remove('active2');
});
