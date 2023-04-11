# Minesweeper game

# How to play
The rules in Minesweeper are simple:

1. Uncover a mine, and the game ends.

2. Uncover an empty square, and you keep playing.

3. Uncover a number, and it tells you how many mines lay hidden in the eight surrounding squares—information you use to deduce which nearby squares are safe to click.


# The primary components of a minesweeper game architecture are:

# The board
Minesweeper has 10*10 square filled in boards to choose from:

Beginner: 81 tiles, 10 mines - 10*10

# Rules
1. Flag - toggle flag to enable and disable. If flag is enabled, click on tiles to mark it with flag emojis (&#128681).

2. Set number of mines randomly on tiles, and when user click on any tiles which has mines underneath, it will end the game and uncover all the mines on the tiles.

3. Set numbers adjecent to mines which means there will to 1 mines hidden adjacent to number 1 in the eight square, 2 mines adjacent to the number 2 in the eight square and so.

4. Set blank squares and if surrounding squares are blank then search for another surrounding squares in upward direction using recursive method.

5. The size of the board and number of mines should be configurable.

6. The game state should be persistent on the client so refreshing the page or     navigating away/back does not lose the current game. 

7. The player should also be able to start a new game if they haven’t finished their current game. 

Steps:
1. Dispaly total numbers of mines, flag, reset button to start the new game
2. 
