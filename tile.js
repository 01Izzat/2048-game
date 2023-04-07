export class Tile {  //плитка
  constructor(gridElement) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");
    this.value = Math.random() > 0.5 ? 2 : 4; //новые ячейки
    this.tileElement.textContent = this.value;
    gridElement.append(this.tileElement);
  }

  setXY(x, y){
    this.x = x;
    this.y = y;
    this.tileElement.style.setProperty('--x', x);
    this.tileElement.style.setProperty('--y', y);
  }
}