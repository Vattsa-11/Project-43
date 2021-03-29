var Hour ;
var Minute ;
var Second ;
var scAngle ;
var hrAngle ; 
var mnAngle ;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90); 
  Hour = hour();
  Minute = minute();
  Second = second();
  scAngle = map(Second,0,60,0,360);
  mnAngle = map(Minute,0,60,0,360);
  hrAngle = map(Hour%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(5);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

}