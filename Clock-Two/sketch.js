var mill;
let myFont;

function preload() {
  myFont = loadFont('alarm clock.ttf');
}

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  fill(255);
  rect(1, (height / 2)-50, width-2, 20);
  rect(1, (height / 2)-30, width-2, 20);
  rect(1, (height / 2)-10, width-2, 20);
  
  var sec = map(second(), 0, 60, 1, (width-2));
  var min = map(minute(), 0, 60, 1, (width-2));
  var hr = map(hour() % 12, 0, 12, 1, (width-2));
  
  fill(255, 0, 0);
  rect(1, (height/2)-50, sec, 19);
  
  fill(255, 83, 26);
  rect(1, (height / 2)-30, min, 19);
  
  fill(255, 255, 26);
  rect(1, (height / 2)-10, hr, 19);
  
  textSize(20);
  fill(0);
  textFont(myFont);
  text(second(), (width/2), (height / 2)-33);
  
  textSize(20);
  fill(0);
  textFont(myFont);
  text(minute(), (width/2), (height / 2)-13);
  
  textSize(20);
  fill(0);
  textFont(myFont);
  text(hour() % 12, (width/2), (height / 2)+7);
}

function getTime() {
  var sec = second();
  var min = minute();
  var hr = hour();

  sec = (sec < 10) ? ("0" + sec) : sec;
  sec = (hr < 12) ? (sec + "AM") : (sec + "PM");
  min = (min < 10) ? ("0" + min) : min;
  hr = (hr > 12) ? (hr - 12) : hr;
  return (hr + ":" + min + ":" + sec);
}