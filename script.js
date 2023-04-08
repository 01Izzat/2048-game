import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
setInputOnce();

function setInputOnce() {
  window.addEventListener('keydown', handleInput, {once:true});
}

function handleInput(e) {
  switch(e.key){
    case 'ArrowUp': moveUp();
      break;

    case 'ArrowDown': 
      break;

    case 'ArrowLeft': 
      break;

    case 'ArrowRight': 
      break;

    default: setInputOnce();
      return;
  }

  setInputOnce()
}

function moveUp() {
  slideTiles(grid.cellsGroupedByColumn);
}

function slideTiles(groupedCells) {
  groupedCells.forEach(group => slideTilesInGroup(group));

  grid.cells.forEach(cell => {
    cell.hasTileForMerge() && cell.mergeTiles();
  })
}

function slideTilesInGroup(group){
  for (let i=1; i < group.length; i++) {
    if (group[i].isEmpty()) {
      continue;
    }

    const cellWithTile = group[i];

    let targetCell;
    let j = i-1;
    while(j>=0 && group[j].canAccept(cellWithTile.linkedTile)) {
      targetCell = group [j];
      j--;
    }

    if(!targetCell) {
      continue;
    }
    if(targetCell.isEmpty()){
      targetCell.linkTile(cellWithTile.linkedTile);
    }
    else{
      targetCell.linkTileForMerge(cellWithTile.linkedTile);
    }

    cellWithTile.unlinkTile();
  }
}