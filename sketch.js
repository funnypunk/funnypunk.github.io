var c1;
var slideMaxCircles, slider, sliderSpacing, slideRadiusCircle;


var maxCircles = 500;

function setup() {

  createCanvas(1800, 1000);
  frameRate(30);
  angleMode(DEGREES);
  colorMode(RGB, 255, 255, 255, 1);
 
  c1 = new Phyllotaxis();
  c1.radius = 3;
  c1.NUMOFCIRCLES = maxCircles;  
  c1.createCircleObjects(width / 2, height / 2);
  c1.setCirclePositions(width / 2, height / 2);

  UI();
  

  

 
  
}

function draw() {  
  background(33, 20, 45, 0.6);
  callSlider();

  
  c1.displayCircles();
  c1.setCirclePositions(width / 2, height / 2);




}

function callSlider() {
  var circleRadius = sliderCircleRadius.value();
  var numOfCircle = slideMaxCircles.value();
  var increment = sliderSpacing.value();
  var angleMultiplier = sliderChangeAngle.value();

  c1.circleRadius = circleRadius;
  c1.NUMOFCIRCLES = numOfCircle;
  c1.constant = increment;  
  c1.angleMultiplier = angleMultiplier;

}


function UI() {
  
  sliderCircleRadius = createSlider(1, 200, 20);
  sliderCircleRadius.position(10, 10);
  sliderCircleRadius.style('width', '180px');

  text("test", 20,20, 10, 10);

  slideMaxCircles = createSlider(1,maxCircles,350);
  slideMaxCircles.position(10, 110);
  slideMaxCircles.style('width', '180px');

  sliderSpacing = createSlider(0, 40.9, 5.2);
  sliderSpacing.position(10, 210);
  sliderSpacing.style('width', '180px');

  sliderChangeAngle = createSlider(0,360,137.5,0);
  sliderChangeAngle.position(10,310);
  sliderChangeAngle.style('width', '380px');
}


