# Minesweeper 💣 😵

# Prerequisite -
React.js, javascript, css etc

# How to play
The rules in Minesweeper are simple:

1. Uncover a mine, and the game ends.

2. Uncover an empty square, and you keep playing.

3. Uncover a number, and it tells you how many mines lay hidden in the eight surrounding squares—information you use to deduce which nearby squares are safe to click.


# The primary components of a minesweeper game are:

1. The board - 10 mines
2. Header has mineCounter, Faces (hasWon, hasLost, resetFace), and Timer
3. NumberDisplayed on board from 1,2,3,4,5,6,7,8
4. Buttons on right clicked will be flag, else rest buttons would be empty or marked with number

# Rules
1. Flag that you don't want to reveal, you are guessing, it might have mines (on right-click).

2. Set mines randomly on tiles, and when user click on any tiles which has mines underneath, it will end the game and uncover all the mines on the tiles.

3. Set numbers adjecent to mines which means there will to 1 mines hidden adjacent to number 1 in the eight square, 2 mines adjacent to the number 2 in the eight square and so.

4. Set empty squares and check if surrounding squares are blank next to it then search for another surrounding squares in upward direction.

5. The player should also be able to start a new game if they haven’t finished their current game. 

# Steps to run this application on local
1. Clone the git repo
2. yarn install & yarn start

<img width="823" alt="Screenshot 2023-04-11 at 4 17 07 PM" src="https://user-images.githubusercontent.com/14871556/231073469-f71ac821-b721-49aa-8dd2-52d6b49aee37.png">




