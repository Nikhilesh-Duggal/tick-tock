//The x, y coordinates of the minute
var xMinute = 400;
var yMinute = 100;

//The x, y coordinates of the hours
var xHour = 400;
var yHour = 100;

//The x, y coordinates of the seconds
var xSeconds = 400;
var ySeconds = 100;

//Minute angle
var angleMinute = 0;

//Hour angle
var angleHours = 0;

//Seconds angle
var angleSecond = 0;

//Initilization
function setup() 
{
  //Creates a canvas
  createCanvas(800,400);

  //Sets the stroke size of the lins and pointsI
  strokeWeight(5);
}

//Converts degrees to radians
function degreesToRadians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

//Draw update
function draw() 
{
  //Today!
  var today = new Date();

  //Set the background
  background(0, 0, 0);

  //Changing stroke size
  strokeWeight(5);

  //Changing stroke color
  stroke("green");

  //Setting the angle based off the time
  angleMinute = today.getMinutes() * 6;
  var hour = today.getHours();
  angleSecond = today.getSeconds() * 6;

  if (hour > 12)
    hour -= 12;

  angleHours = hour * 30;

  //Set the coordinates based off angle
  xMinute = 400 + (75 * Math.sin(degreesToRadians(angleMinute)));
  yMinute = 200 - (75 * Math.cos(degreesToRadians(angleMinute)));
  
  xHour = 400 + (30 * Math.sin(degreesToRadians(angleHours)));
  yHour = 200 - (30 * Math.cos(degreesToRadians(angleHours)));

  xSeconds = 400 + (100 * Math.sin(degreesToRadians(angleSecond)));
  ySeconds = 200 - (100 * Math.cos(degreesToRadians(angleSecond)));

  //Draws the line
  var minutes = line(400, 200, xMinute ,yMinute);
  stroke("blue");
  var hours = line(400, 200, xHour, yHour);
  stroke("red");
  var seconds = line(400, 200, xSeconds, ySeconds);

  stroke("white");
  strokeWeight(10);

  //Draws the point
  point(400, 200);

  noFill();
  strokeWeight(5);
  stroke("red");
  arc(400, 200, 300, 300, -90, angleSecond - 90);

  strokeWeight(3.5);
  stroke("green");
  arc(400, 200, 275, 275, -90, angleMinute - 90);

  strokeWeight(2);
  stroke("blue");
  arc(400, 200, 250, 250, -90, angleHours - 90);

  //Actually draws
  drawSprites();
}