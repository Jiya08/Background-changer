var btn_red;
var btn_green;
var btn_orange;
var btn_yellow;
var btn_lghtblue;
var btn_darkblue;
var btn_purple;
var btn_lghtpink;
var btn_darkpink;


var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600,600); 
  btn_red = createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(justred_bg);
  
  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(justgreen_bg);

  btn_orange = createButton("ORANGE");
  btn_orange.position(350,50);
  btn_orange.mousePressed(justorange_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(100,100);
  btn_yellow.mousePressed(justyellow_bg);

  btn_lghtpink = createButton("LIGHT PINK");
  btn_lghtpink.position(200,100);
  btn_lghtpink.mousePressed(lightpink_bg);
  
  btn_lghtblue = createButton("LIGHT BLUE");
  btn_lghtblue.position(300,100);
  btn_lghtblue.mousePressed(lightblue_bg);

  btn_darkblue = createButton("DARK BLUE");
  btn_darkblue.position(400,100);
  btn_darkblue.mousePressed(darkblue_bg);

  btn_purple = createButton("PURPLE");
  btn_purple.position(100,150);
  btn_purple.mousePressed(purple_bg);

  btn_darkpink = createButton("PINK3");
  btn_darkpink.position(250,150);
  btn_darkpink.mousePressed(darkpink_bg);
}
  function draw()
{
  background(r,g,b);
}
 function justred_bg() {


r = 255;
g = 0;
b = 0;
  }

  function justgreen_bg() 
  {
r = 0;
g = 255;
b = 0;
  }

  function justorange_bg() 
  {
r = 255;
g = 153;
b = 51;
  }

  function justyellow_bg() 
  {
r = 255;
g = 255;
b = 51;
  }

  function lightpink_bg() 
  {
r = 204;
g = 0;
b = 204;
  }

function purple_bg() 
  {
r = 102;
g = 0;
b = 204;
  }

  function lightblue_bg() 
  {
r = 51;
g = 255;
b = 255;
  }

  function darkblue_bg() 
  {
r = 255;
g = 0;
b = 0;
  }

  function darkpink_bg() 
  {
r = 255;
g = 0;
b = 127;
  }


 


