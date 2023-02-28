export const one = 1;
export const two = 2;
export const three = 3;
export const four = 4;
export const five = 5;
export const six = 6;
export const seven = 7;
export const eight = 8;
export const nine = 9;
export const ten = 10;
export const area = document.getElementById('area');
export const winner = document.getElementById('winner');
export const currentPlayer = document.getElementById('curPlyr');
export const btnReset = document.getElementById('btn-reset');
export const btnClear = document.getElementById('btn-clear');

export const cell = document.getElementsByClassName('cell');


export const winIndex = [
  [1, two, three],
  [four, five, six],
  [seven, eight, nine],
  [1, four, seven],
  [two, five, eight],
  [three, six, nine],
  [1, five, nine],
  [three, five, seven]
];

export const stat = {
  x: 0,
  o: 0,
  d: 0
};
