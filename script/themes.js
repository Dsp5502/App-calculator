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

  if (document.body.classList.contains('active2')) {
    localStorage.setItem('mode2', 'true');
    localStorage.setItem('mode3', 'false');
    localStorage.setItem('mode1', 'false');
  }
});

tema1.addEventListener('click', () => {
  console.log('tema1');
  const body = document.querySelector('body');
  body.classList.add('active1');
  body.classList.remove('active2');
  body.classList.remove('active3');

  if (document.body.classList.contains('active1')) {
    localStorage.setItem('mode1', 'true');
    localStorage.setItem('mode2', 'false');
    localStorage.setItem('mode1', 'false');
  }
});

tema3.addEventListener('click', () => {
  console.log('tema3');
  const body = document.querySelector('body');
  body.classList.add('active3');
  body.classList.remove('active2');
  if (document.body.classList.contains('active3')) {
    localStorage.setItem('mode3', 'true');
    localStorage.setItem('mode2', 'false');
    localStorage.setItem('mode1', 'false');
  }
});

if (localStorage.getItem('mode2') === 'true') {
  document.body.classList.add('active2');
}

if (localStorage.getItem('mode1') === 'true') {
  document.body.classList.add('active1');
}

if (localStorage.getItem('mode3') === 'true') {
  document.body.classList.add('active3');
}
