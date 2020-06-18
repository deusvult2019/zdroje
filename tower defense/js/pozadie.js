class pozadie extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("poz");
  }

 
  draw(game) {
    game.context.drawImage(this.img, this.x, this.y);
  }
  
}