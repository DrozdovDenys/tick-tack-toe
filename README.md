<h1 align="center">«Tick-Tack-Toe Game»</h1>

<div align="center"><img src="img/readme.jpg"/></div>

<h2>Descripion</h2>
 Implemented the game 'X or O'. Players are marking by turns the
 spaces in a 3x3 grid with X or O.  

1. **GAME FLOW**:
   - The game should randomly decide which player has the first turn at the beginning of the round and highlight his name. After every turn, the highlighted name should      change accordingly.
   - Player should be allowed to mark only an empty cell.
   - Once a player succeeded to mark the whole row, the game should display an appropriate message (e.g. ‘Player 1 won!’) and increment winner’s score. The winning row      should be highlighted or crossed out.
   - When all 9 squares are full and no player has 3 marks in a row, the game is over with a draw. ‘Draw!’ message should be displayed and both player’s scores are          increased by 1.
   - When user press ‘New game’ button, the grid should be cleared, but players' scores should remain.
   - When users press ‘Clear button’, both players' scores and grid should be cleared.

2. **REQUIREMENTS**:
   - Use Webpack to handle build process.
   - Please use ES6 where it is possible. Code should be split by its purpose and located in different modules. Should be compiled to one minimized bundle.js file.
   - Styles should be Less/Sass/Scss in different files, but should be compiled into one file.
   - package.json file should have 2 scripts:
    Build - for compiling all the project,
    Start - runs development server and watches all file changes.

<h2>Technologies</h2>

+ HTML
+ SCSS
+ JavaScript
+ Webpack
+ Babel

<h3 align="center"><a href="https://drozdovdenys.github.io/tick-tack-toe/">SEE LIVE</a></h3>
