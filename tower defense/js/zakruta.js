class zakruta extends GameObject {
    constructor(x, y,o) {
      var size = 50;
      super(x * size, y * size, size);
      if(o == 0)
      this.img = document.getElementById("zakruta");
      else if(o == 1)
      this.img = document.getElementById("zakruta1");
      else if(o == 2)
      this.img = document.getElementById("zakruta2");
      else if(o == 3)
      this.img = document.getElementById("zakruta3");
    }
  
   
    draw(game) {
      game.context.drawImage(this.img, this.x, this.y);
    }
    
  }