var game;


window.onload = function () {
  
  game = new Game("canvas");
  
};

function hrat()
{
  document.getElementById('info').style.display = "none"
  document.getElementById('hra').style.display = "grid"
  game.pauza=1;
  game.loop();
}
function info()
{
  document.getElementById('uvod').style.display = "none"
  document.getElementById('info').style.display = "grid"
}