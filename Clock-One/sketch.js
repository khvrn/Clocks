var circles = []

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
  
  showTime();
  
  translate(width/2, height/2);
  rotate(-90);
  
  showMilli();
  showSeconds();
  showMinutes();
  showHour();
}

function showSeconds() {
  var sec = second();
  var aSec = map(sec, 0, 60, 0, 360);
  
  //seconds ring
  push();
  noFill();
  strokeWeight(10);
  stroke(255, 255, 26);
  circle(0, 0, 250);
  pop();
  
  //seconds dot
  push();
  var sr = (250/2);
  let sx = sr * cos(aSec);
  let sy = sr * sin(aSec);
  
  noStroke();
  fill(0);
  circle(sx, sy, 5);
  pop();
}

function showMinutes() {
  var min = minute();
  var aMin = map(min, 0, 60, 0, 360);
  
  //minutes ring
  push();
  noFill();
  strokeWeight(10);
  stroke(255, 140, 26);
  circle(0, 0, 270);
  pop();
  
  //minutes dot
  push();
  var mr = (270/2);
  let mx = mr * cos(aMin);
  let my = mr * sin(aMin);
  
  noStroke();
  fill(0);
  circle(mx, my, 5);
  pop();
}

function showHour() {
  var hr = hour();
  var aHour = map(hr % 12, 0, 12, 0, 360);
  
  //hour ring
  push();
  noFill();
  strokeWeight(10);
  stroke(255, 0, 0);
  circle(0, 0, 290);
  pop();
  
  //hour dot
  push();
  var hrad = (290/2);
  let hx = hrad * cos(aHour);
  let hy = hrad * sin(aHour);
  
  noStroke();
  fill(0);
  circle(hx, hy, 5);
  pop();
}

function showMilli() {
  var milli = int(millis());
  var aMilli = map(milli, 0, 60, 0, 360);
  
  push();
  rotate(aMilli);
  strokeWeight(2);
  stroke(140, 26, 255);
  line(0, 0, 100, 0);
  pop();
}

function showTime() {
  var hr = hour();
  var sec = second();
  
  if(sec < 10) {
      sec = "0" + sec;
    }
  
  if(hr > 12) {
    sec = sec + " PM";
    
  } else {
    sec = sec + " AM";
  }
  
  textSize(50);
  fill(83, 255, 26);
  textFont(myFont);
  textAlign(CENTER);
  
  if(hr > 12) {
    hr = hr - 12;
    text(str(hr) +":" + str(minute()) + ":" + sec, (width/2), (height-50));
  }
  text(str(hr) +":" + str(minute()) + ":" + sec, (width/2), (height-50));
}