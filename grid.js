import { Cell } from "./cell.js";

const GRID_SIZE = 4;
const GRID_COUNT = GRID_SIZE * GRID_SIZE;

export class Grid{
  constructor(gridElement){
    this.cells = [];
    for (let i = 0; i < GRID_COUNT; i++) {
      this.cells.push(
        new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
      );
      
    }

    this.cellsGroupedByColumn = this.groupCellsByColumn();
  }
  getRandomEmptyCell() {
    const emptyCells = this.cells.filter(cell => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }

  groupCellsByColumn() {
    return this.cells.reduce((groupedCells, cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x] [cell.y] = cell;
      return groupedCells;
    }, []);
  }
}