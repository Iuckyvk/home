'use strict'

const number = document.querySelector('#number');

const score = document.querySelector('#score');

const logo = document.querySelector('#logo');;

const btns = document.querySelectorAll('.publics');

const links = document.querySelectorAll('.publics > a')

const all = document.querySelectorAll('*')


if (localStorage.getItem('date')){
  let div = document.createElement('div');
  div.style.backgroundColor = '#2c2c2c';
  div.style.color = 'red';
  div.style.width = '80vw';
  div.style.height = '30vh';
  div.style.wordBreak = 'breakAll';
  div.style.textAlign = 'center'
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.position = 'absolute';
  div.style.transform = 'translate(-50%, -50%)';
  div.style.border = '1px solid grey';
  div.style.borderRadius = '10px';
  div.textContent = 'Вы уже потратили все свои попытки приходите завтра';
  div.style.paddingTop = '15vh';
  document.body.appendChild(div);
}



setInterval(() => {
  let x = Math.round(Math.random() * 9);

  let y = Math.round(Math.random() * 9);

  let z = Math.round(Math.random() * 99);


  while (x < 5) {
    x = Math.round(Math.random() * 9);
  }

  while (z < 10) {
    z = Math.round(Math.random() * 99);
  }

  if (x == 9 && y == 9 && z >= 90) {
    ++x;
    y = Math.round(Math.random() * 2);

    z = Math.round(Math.random() * 50);
  }

  number.textContent = `${x}${y}${z}`;


}, 2000)




logo.addEventListener('click', () => {
  window.location.href = 'etc/info.html';
})


const urls = [
  null, 'https://m.vk.com/greatestmus', 'https://m.vk.com/musincar', 'https://m.vk.com/gameswebm', 'https://m.vk.com/fun_time_vk', 'https://m.vk.com/brawlstarsnet', 'https://m.vk.com/staddydrop1', 'https://m.vk.com/python_programming', 'https://m.vk.com/himanstartsss', 'https://m.vk.com/cinema.culture'
];


function random() {
  let rand = Math.round(Math.random() * 9);

  return urls[rand];
}

let balls = 0;

for (let x = 0; x < btns.length; x++) {
  btns[x].addEventListener('click', () => {
    links[x].href = random();

    btns[x].disabled = true;


    setTimeout(() => {
      ++balls
      score.textContent = balls;
      links[x].removeAttribute('href');
    }, 2000)
  })
}
if (btns[x].disabled = true){
let day = new Date().getDate();
localStorage.setItem('date', day);
}
