class enemy 
{
    constructor(y,hp)
    {
        this.x=120
        this.y=y
        this.dx=0
        this.dy=2
        this.hp=50*hp
        
        this.img = document.getElementById("enm");
    }
    draw(game) {
        
        game.context.drawImage(this.img, this.x,this.y);
      }


    move(dt)
    {
        if(this.y < 600 && this.y > 570 && this.x > 100 && this.x < 150)
            {
                this.dx=2;
                this.dy=0;
            }
        else if(this.y < 600 && this.y > 570 && this.x > 470 && this.x < 500)
                {
                    this.dx=0;
                    this.dy=-2; 
                }
        else if(this.y < 420 && this.y > 400 && this.x > 470 && this.x < 500)
                {
                    this.dx=-2;
                    this.dy=0; 
                }
        else if(this.y < 420 && this.y > 400 && this.x > 250 && this.x < 270)
                {
                    this.dx=0;
                    this.dy=-2; 
                }
        else if(this.y < 220 && this.y > 200 && this.x > 250 && this.x < 270)
                {
                    this.dx=2;
                    this.dy=0; 
                }
       else if(this.y < 220 && this.y > 200 && this.x > 620 && this.x < 650)
                {
                    this.dx=0;
                    this.dy=2; 
                }
       else if(this.y < 600 && this.y > 570 && this.x > 620 && this.x < 650)
                {
                    this.dx=2;
                    this.dy=0; 
                }
        else if(this.y < 600 && this.y > 570 && this.x > 870 && this.x < 900)
                {
                    this.dx=0;
                    this.dy=-2; 
                }
        else if(this.y < 470 && this.y > 450 && this.x > 870 && this.x < 900)
                {
                    this.dx=-2;
                    this.dy=0; 
                }
        else if(this.y < 470 && this.y > 450 && this.x > 700 && this.x < 720)
                {
                    this.dx=0;
                    this.dy=-2; 
                }
        else if(this.y < 120 && this.y > 100 && this.x > 700 && this.x < 720)
                {
                    this.dx=2;
                    this.dy=0; 
                }
        else if(this.y < 120 && this.y > 100 && this.x > 870 && this.x < 900)
                {
                    this.dx=0;
                    this.dy=2; 
                }
       else if(this.y < 350 && this.y > 320 && this.x > 870 && this.x < 900)
                {
                    this.dx=2;
                    this.dy=0; 
                }        

        this.y+=this.dy * dt;
        this.x+=this.dx * dt;
    }


}