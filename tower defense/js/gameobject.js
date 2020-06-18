class GameObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.physical = true;
  }
   
    draw(game) {
    var ctx = game.context;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillRect(0, 0, this.size, this.size);
    ctx.restore();
  }
 
}