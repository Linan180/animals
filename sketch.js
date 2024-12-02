var jiujiu=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(173,216,230);//blue
}

//The draw function happens over and over again
function draw() {
  background(173,216,mouseX); //an RGB color for the canvas' background
  //circle
  stroke(255,123,127); // an RGB color for the circle's border//peach color
  strokeWeight(3);
  fill(255,jiujiu,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(250,jiujiu,jiujiu,130); // center of canvas, 20px dia
  
  fill(200, 92, 164,mouseY);
  ellipse(mouseX,mouseY,50,50);
  fill(255,50,50);
  stroke(255,255,255);
  textFont("Helvetica");
  textSize(50);
  text('Good Boy',200,250);//red and white color
  
  triangle(50,250,300,300,100,300);//red color
  rect(50,100,20,20);
  line(50,100,20,20); //white color
  point(450,470);
}

function mousePressed() {

if (jiujiu>=500){
  jiujiu=0;
}else{
  jiujiu=jiujiu+5;

}

}