import {
  one,
  two,
  ten,
  winner,
  currentPlayer,
  stat,
  cell,
  winIndex,
} from './variable';

let player;
let winPosArr = [];

export const randomPlayer = () => {
  currentPlayer.innerHTML = (Math.floor(Math.random() * ten) % two
    ? (player = 'x')
    : (player = 'o')
  ).toUpperCase();
};
randomPlayer();

export const clear = () => {
  stat.x = 0;
  stat.o = 0;
  stat.d = 0;
  newGame();
  randomPlayer();
};

export const newGame = () => {
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = '';
  }
  highlightedRow(winPosArr, 'white');
  updateStat();

  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick);
    cell[i].style.cursor = 'pointer';
  }
  winner.textContent = 'The winner is...';
};

export const highlightedRow = (arr, color) => {
  arr.forEach((pos) => {
    cell[pos - 1].style.backgroundColor = color;
  });

  for (let i = 0; i < cell.length; i++) {
    cell[i].style.cursor = 'not-allowed';
    cell[i].removeEventListener('click', cellClick);
  }
};

export const updateStat = () => {
  document.getElementById('sX').innerHTML = stat.x;
  document.getElementById('sO').innerHTML = stat.o;
  document.getElementById('sD').innerHTML = stat.d;
};

export const checkWin = (data) => {
  for (let i = 0; i < winIndex.length; i++) {
    let win = true;

    for (let j = 0; j < winIndex[i].length; j++) {
      let val = winIndex[i][j];
      let ind = data.indexOf(val);

      if (ind === -one) {
        win = false;
      }
    }

    if (win) {
      winPosArr = winIndex[i];
      highlightedRow(winPosArr, 'green');
      return true;
    }
  }

  return false;
};

export const cellClick = (e) => {
  const data = [];

  !e.target.innerHTML
    ? (e.target.innerHTML = player)
    : alert('The cell is full. Choose anoter cell!');

  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML === player
      ? data.push(parseInt(cell[i].getAttribute('pos')))
      : null;
  }

  if (checkWin(data)) {
    stat[player] += 1;
    winner.innerText = `The winner is ${player}`;
  } else {
    let draw = true;
    for (let i in cell) {
      if (cell[i].innerHTML === '') {
        draw = false;
      }
    }
    if (draw) {
      stat.d += 1;
      winner.innerText = 'The draw. Try again!';
    }
  }

  player = player === 'x' ? 'o' : 'x';
  currentPlayer.innerHTML = player.toUpperCase();
};
