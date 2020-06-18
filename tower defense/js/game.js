class Game {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.context = canvas.getContext("2d");
    this.p1=1   
    this.time = Date.now();
    this.scene = level1();
    this.lvl=1
    this.nepriatelia=[]
    this.veze=[] 
    this.vez=0
    this.zivot=20;
    this.peniaze=500;
    this.token=0
    this.vylepsitP=-1;
    this.pauza=1;
    this.hudbaP=1;

    this.loop = function() {
			game.onloop()
		}
  } 
  


  onloop() {
    var now = Date.now();
		var dt = (now - this.time)/60  ;
    this.time = now;
    
    
    
    if(this.pauza)
    {
     
    if(this.hudbaP)
      document.getElementById("hudba").play();
    for(var i in this.nepriatelia)
      this.nepriatelia[i].move(dt);
    
    for (var i in this.scene) {
      this.scene[i].draw(this);
    }
    for (var i in this.nepriatelia) {
      this.nepriatelia[i].draw(this);
    }
    for (var i in this.veze) {
      this.veze[i].draw(this);
    }

    for(var i in this.veze)
    {
      this.veze[i].strelba(this)
    }

    for(var i in this.nepriatelia)
    {
      if(this.nepriatelia[i].hp <= 0)
      {
        this.nepriatelia.splice(i, 1);
        if(this.lvl == 6 || this.lvl == 11)
        {
        this.token+=1;
        document.getElementById('power').innerHTML ="POWER TOKEN " + this.peniaze;
        }
        else 
        {
        this.peniaze+=20;
        document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
        }
      }
    }

    if(this.nepriatelia.length==0)
    {
      this.spawn()
    }

    for(var i in this.nepriatelia)
      if(this.nepriatelia[i].x > 1000)
      {
        this.nepriatelia.splice(i, 1);
        this.zivot--;
        document.getElementById('zivoty').innerHTML ="ZIVOTY " + this.zivot;
      }
    }
    this.prehraCheck();
    this.vyhraCheck();
    
    requestAnimationFrame(this.loop);
  }

  vez1_prid()
  {
    this.vez=1
  }
  vez2_prid()
  {
    this.vez=2
  }
  vez3_prid()
  {
    this.vez=3
  }
  vez4_prid()
  {
    this.vez=4
  }
  vez5_prid()
  {
    this.vez=5
  }
  vez6_prid()
  {
    this.vez=6
  }

  click()
    {
      if (this.vez == 0)
        this.vylepsiID()
      else
        this.prid()  
    }
  prid()
  {
    if(this.vez!=0)
      {
        var x=event.offsetX;
        var y=event.offsetY;
        var corx=0
        var cory=0

        for(var i in this.scene)
        {
         if(this.scene[i].x < x && this.scene[i].x+50 > x && this.scene[i].y < y && this.scene[i].y+50 > y )
          {
            if(this.scene[i] instanceof pozadie)
            {
              for(var j in this.veze)
              {
                if(this.veze[j].x < x && this.veze[j].x+50 > x && this.veze[j].y < y && this.veze[j].y+50 > y )
                return;
              }
            corx=this.scene[i].x
            cory=this.scene[i].y
            break;
            }
            else
            return;
          }
        }
        if(this.vez==1)
        {
          if(this.peniaze >= 100)
          {
          this.veze.push(new veza1(corx,cory))
          this.peniaze-=100;
          document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
          }
        }
        else if(this.vez==2)
        {
        if(this.peniaze >= 150)
          {
          this.veze.push(new veza2(corx,cory))
          this.peniaze-=150;
          document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
          }
        }
        else if(this.vez==3)
        {
          if(this.peniaze >= 175)
            {
            this.veze.push(new veza3(corx,cory))
            this.peniaze-=175;
            document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
            }
        }
        else if(this.vez==4)
        {
            if(this.peniaze >= 125)
              {
              this.veze.push(new veza4(corx,cory))
              this.peniaze-=125;
              document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
              }  
        }          
        else if(this.vez==5)
        {
              if(this.token >= 1)
              {
                this.veze.push(new veza5(corx,cory))
                this.token-=1;
                document.getElementById('power').innerHTML ="POWER TOKEN " + this.token;
              }
        }      
        else if(this.vez==6)
        {
            if(this.token >= 1)
              {
                this.veze.push(new veza6(corx,cory))
                this.token-=1;
                document.getElementById('power').innerHTML ="POWER TOKEN " + this.token;
              }  
        }

        this.vez=0

      }
  }
  spawn()
  {
    if(this.p1)
    {
      this.time2=Date.now();
      this.p1=0
    }
    if((this.time - this.time2) /60 > 500)
    {
      if(this.lvl == 5 || this.lvl == 10)
      this.nepriatelia.push(new boss(this.lvl))
      else
      {
        let c=0;
        for(let j=0;j<25;j++)
        { 
          this.nepriatelia.push(new enemy(c,this.lvl))
          c=c-30;
        }
      }
      this.p1=1;
      document.getElementById('vlna').innerHTML = "VLNA " + this.lvl + "/20";
      this.lvl++;
    }
  }

  zob(c)
  {
    if(c==1)
    {
      document.getElementById('cena').innerHTML = "CENA 100";
      document.getElementById('DMG').innerHTML = "DMG 25";
      document.getElementById('DOSAH').innerHTML = "DOSAH 100";
      document.getElementById('RYCHLOST').innerHTML = "RELOAD 15";

    }
    else if(c==2)
    {
    document.getElementById('cena').innerHTML = "CENA 150";
    document.getElementById('DMG').innerHTML = "DMG 30";
    document.getElementById('DOSAH').innerHTML = "DOSAH 115";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  20";
    }
    else if(c==3)
    {
    document.getElementById('cena').innerHTML = "CENA 175";
    document.getElementById('DMG').innerHTML = "DMG 350";
    document.getElementById('DOSAH').innerHTML = "DOSAH 300";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  150";
    }
    else if(c==4)
    {
    document.getElementById('cena').innerHTML = "CENA 125";
    document.getElementById('DMG').innerHTML = "DMG 45";
    document.getElementById('DOSAH').innerHTML = "DOSAH 130";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  25";
    }
    else if(c==5)
    {
    document.getElementById('cena').innerHTML = "CENA 1 PT";
    document.getElementById('DMG').innerHTML = "DMG 30";
    document.getElementById('DOSAH').innerHTML = "DOSAH 500";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  45";
    }
    else if(c==6)
    {
    document.getElementById('cena').innerHTML = "CENA 1 PT";
    document.getElementById('DMG').innerHTML = "DMG 35";
    document.getElementById('DOSAH').innerHTML = "DOSAH 200";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  5";
    }
  }
  zob1()
  {
    document.getElementById('cena').innerHTML = "CENA ";
    document.getElementById('DMG').innerHTML = "DMG ";
    document.getElementById('DOSAH').innerHTML = "DOSAH ";
    document.getElementById('RYCHLOST').innerHTML = "RELOAD  ";
  }
  vylepsiID()
  {
    var x=event.offsetX;
    var y=event.offsetY;
    for(var i in this.veze)
        {
         if(this.veze[i].x < x && this.veze[i].x+50 > x && this.veze[i].y < y && this.veze[i].y+50 > y )
          {
            this.vylepsitP=i;
            document.getElementById('uroven').innerHTML = "UROVEN " + this.veze[i].max;
            break;
          }
        }
        
  }
  vylepsit()
  { 
    if(this.vylepsitP > -1)
      if(this.veze[this.vylepsitP].max <10 && this.peniaze >= 50)
      {
        this.veze[this.vylepsitP].dmg*=1.1;
        this.veze[this.vylepsitP].max+=1;
        this.vylepsitP=-1;
        this.peniaze-=50
        document.getElementById('penaze').innerHTML ="PENIAZE " + this.peniaze;
        document.getElementById('uroven').innerHTML = "UROVEN ";
      }
  }
  menu()
  {
    document.getElementById('hra').style.display = "none";
    document.getElementById('menuO').style.display = "grid";
    document.getElementById("hudba").pause();
    this.pauza=0;
  }

  spat()
  {
    document.getElementById('hra').style.display = "grid";
    document.getElementById('menuO').style.display = "none";
    this.pauza=1;
  }
  again()
  {
    document.getElementById('vlna').innerHTML = "VLNA 1/20" ;
    document.getElementById('penaze').innerHTML ="PENIAZE 500";
    document.getElementById('zivoty').innerHTML ="ZIVOTY 20";
    document.getElementById('hra').style.display = "grid";
    document.getElementById('menuO').style.display = "none";
    document.getElementById('prehraO').style.display = "none";
    document.getElementById('vyhraO').style.display = "none";

    this.p1=1   
    this.time = Date.now();
    this.lvl=1
    this.nepriatelia=[]
    this.veze=[] 
    this.vez=0
    this.zivot=20;
    this.peniaze=500;
    this.token=0
    this.vylepsitP=-1;
    this.pauza=1;
  }

  koniec()
  {
    document.getElementById('vlna').innerHTML = "VLNA 1/20" ;
    document.getElementById('penaze').innerHTML ="PENIAZE 500";
    document.getElementById('zivoty').innerHTML ="ZIVOTY 20";
    document.getElementById('uvod').style.display = "grid";
    document.getElementById('vyhraO').style.display = "none";
    document.getElementById('prehraO').style.display = "none";
    document.getElementById('menuO').style.display = "none";
    this.p1=1   
    this.time = Date.now();
    this.lvl=1
    this.nepriatelia=[]
    this.veze=[] 
    this.vez=0
    this.zivot=20;
    this.peniaze=500;
    this.token=0
    this.vylepsitP=-1;
    this.pauza=0;
  }
  prehraCheck()
  {
    if(this.zivot <=0)
      {
        document.getElementById('hra').style.display = "none";
        document.getElementById('prehraO').style.display = "grid";
        document.getElementById('pocet').innerHTML=this.lvl-1;
        document.getElementById("hudba").pause();
        this.pauza=0;
      }
  }
  vyhraCheck()
  {
    if(this.nepriatelia==0 && this.lvl==21)
      {
        document.getElementById('hra').style.display = "none";
        document.getElementById('vyhraO').style.display = "grid";
        document.getElementById("hudba").pause();
        this.pauza=0;
      }
  }
  Mturn()
  {
    if(this.hudbaP==1)
    {
      this.hudbaP=0;  
      document.getElementById("hudba").pause();
      document.getElementById("sl").style.display="inline";
    }
    else if(this.hudbaP==0)
      {
      this.hudbaP=1;
      document.getElementById("sl").style.display="none";
      }
  }
  vyl()
  {
    document.getElementById('cena').innerHTML = "CENA 50";
  }
}


