const generateCells = () => {
  // creating the cells;
  const cells = [];
  for (let row = 0; row < 9; row++) {
    cells.push([]);
    for (let col = 0; col < 9; col++) {
      cells[row].push({ bomb: false, state: 0 }); // 0 = unpressed, 1 = visible, 2 = flag
    }
  }

  // randomly put 10 bombs in any cells
  for (let i = 0; i < 10; i++) {
    let placedBomb = false;
    while (!placedBomb) {
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);

      if (!cells[row][col].bomb) {
        cells[row][col].bomb = true;
        placedBomb = true;
      }
    }
  }

  // calculate the number of each cell
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = cells[row][col];
      if (cell.bomb) {
        cell.value = -1;
        continue;
      }

      // compute value for bomb placed in sourrounding 8 square;
      let counter = 0;
      //top left
      if (row > 0 && col > 0 && cells[row - 1][col - 1].bomb) {
        counter++;
      }
      //top
      if (row > 0 && cells[row - 1][col].bomb) {
        counter++;
      }
      //top right
      if (row > 0 && col < 8 && cells[row - 1][col + 1].bomb) {
        counter++;
      }
      //left
      if (col > 0 && cells[row][col - 1].bomb) {
        counter++;
      }
      // right
      if (col < 8 && cells[row][col + 1].bomb) {
        counter++;
      }
      // bottom left
      if (row < 8 && col > 0 && cells[row + 1][col - 1].bomb) {
        counter++;
      }
      // bottom
      if (row < 8 && cells[row + 1][col].bomb) {
        counter++;
      }
      // bottom right
      if (row < 8 && col < 8 && cells[row + 1][col + 1].bomb) {
        counter++;
      }

      cell.value = counter;
    }
  }

  return cells;
};

export default generateCells;
