let yPos = 200;
let speed = -2; 
let eRotate1 = 0;
let rSpeed= .5;


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(102,189,255);
   //sun
  fill(242,245,50);
  ellipse(5, 5 ,200, 200);
  
  
  //ground
  fill(130,155,80)
  rect(0,400,600,100);
  fill(130,155,80);
  rect(0,300, 600, 100);
 
 //trees
 
  
  
  //body
  stroke(150);
  strokeWeight(2);
  fill(255);
  rect(240,300,70,70,20);
  ellipse(220,350,90,90);
  
  //legs
  ellipse(200,375,60,65);
  ellipse(290,350,50,55);
  rect(280,355,20,60,6);
  rect(190,395,60,20,6)

  //head
  fill(255);
  rect(335,295,30,30,5);
  ellipse(325,300,60,60);
  
  
  //ears
  push();
  translate(322, 265);
  rotate(radians(eRotate1));
  ellipse(0,-25,20,70);
  ellipse(-18,-20,20,80);
  
  eRotate1= eRotate1 + rSpeed;
  console.log(eRotate1);
  
  if (eRotate1 > 10)
  {
    rSpeed= -rSpeed;
  }
  
  if(eRotate1 < -20)
  {
   rSpeed= -rSpeed;
  }
  
 
  pop();
  
 //ellipse(310,232,20,80); 
  
  //eyes
  fill(252,48,3);
  strokeWeight(0);
  ellipse(340,290,10,5);
  
  
  
  
  
  
  
  
  
  
}