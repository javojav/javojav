 var circleX , circleY;
  var circleY=random(height)
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  background(0);
}

function draw() {
  circleX=random(width);
  circleY=random(height);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX, circleY, 50, 50);
}

function mousePressed() {
   createCanvas(window.innerWidth,window.innerHeight);
     background(0);
}