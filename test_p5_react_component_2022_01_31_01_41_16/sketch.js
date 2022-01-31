/*
this is to be use as en example when makeing a p5 
    react object 
  
this makes an ellipse get bigger and smaller

Max Scott
last modified 1-29-2022
*/

let x = 50;
let y = 50;
let grow = true;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  
  background(220);
  
  
  fill(255,0,0);
  // maybe replace ellipse with 
  //    image of hart or somthing
  ellipse(200,200,x,y);
  if(grow){
    x++;
    y++;
  }else{
    x--;
    y--;
    
  }
  if(x > 100 ){
    grow = false;
  }
  if(x < 50){
    grow = true;
  }
}