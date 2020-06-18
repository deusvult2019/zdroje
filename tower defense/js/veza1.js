class veza1 
{
    constructor(x,y)
    {
        this.x=x
        this.y=y
        this.img = document.getElementById("vez1");
        this.time =  Date.now();
        this.rychlost=15;
        this.dosah=100
        this.dmg=25
        this.max=1;
    }
    draw(game) {
        game.context.drawImage(this.img, this.x,this.y);
      } 

    strelba(game)
    {
        this.now = Date.now();
        if((this.now - this.time) /60> this.rychlost)
        {
            
            this.time=this.now;          
            for(var i in game.nepriatelia)
            {
                if(game.nepriatelia[i].y > 0 && Math.sqrt(Math.pow(game.nepriatelia[i].x - this.x + 25, 2) + Math.pow(game.nepriatelia[i].y - this.y +25, 2)) <= this.dosah )
                {
                    game.nepriatelia[i].hp=game.nepriatelia[i].hp- this.dmg;
                    break;
                    
                }
            }
        }
    }


}