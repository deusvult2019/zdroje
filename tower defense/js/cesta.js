class cesta extends GameObject {
  constructor(x, y, o) {
    var size = 50;
    super(x * size, y * size, size);
    if(o ==0 )
    this.img = document.getElementById("cesta");
    else 
    this.img = document.getElementById("cesta1");
  }

  draw(game) {
    game.context.drawImage(this.img, this.x, this.y);
  }
  
}
