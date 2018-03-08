var circle,c1;

function setup() {
  createCanvas(1800, 1000);
  frameRate(30);
  angleMode(DEGREES);
  colorMode(RGB, 255, 255, 255, 1)
  

  circle = new Circle();
  c1 = new Circle();
  circle.spawn(width / 2, height / 2);



}

function draw() {


  circle.drawC();
  c1.drawC();

}

function mouseClicked() {
  c1.spawn(mouseX,mouseY);
}