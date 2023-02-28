import '../scss/main.scss';
import { nine, area, btnReset, btnClear, cell } from './variable';
import { cellClick, newGame, clear } from './functions';

for (let i = 1; i <= nine; i++) {
  area.innerHTML += `<div class = 'cell' pos = ${i}></div>`;
}

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', cellClick);
}

btnReset.addEventListener('click', newGame);
btnClear.addEventListener('click', clear);
