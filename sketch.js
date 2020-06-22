
var TI;

function setup() {
  createCanvas(1300, 600);
  TI = loadImage("Virus.png");


  //set up ball variables
  ball = [];
  ballVel = [];
  ballSize = 50;
 
  
  //ball quantity and ball speed
  for (var i = 0; i < 1; i++) {
    ball.push(createVector(random(0, width), random(0, height)));
    ballVel.push(p5.Vector.random2D().mult(random(8)));
  }

}



//show or draw ball
function draw() {
  background(0);
  text('As the Bubbles increase , the death toll due to COVID-19 increases ...',400,10);
updateBall();

 
}

function mouseClicked(){
    ball.push(createVector( mouseX, mouseY ));
    ballVel.push(p5.Vector.random2D().mult(random(8)));
}