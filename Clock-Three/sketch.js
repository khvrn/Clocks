function setup() {
  createCanvas(900, 700);
}

function draw() {
  background(0);
  
  textSize(30);
  
  var num = 1;
  for(let j=1; j <=6; j++) {
    for(let i=1; i <=10; i++) {
      fill(255, 150);
      text(num, i*(width/12), j*(height/7));
      
      if(minute() == num) {
        fill(0, 255, 0);
        text(num, i*(width/12), j*(height/7));
      }
      
      if((hour() % 12) == num) {
        fill(0, 0, 255);
        text(num%12, i*(width/12), j*(height/7));
      }
      
      if(second()==num) {
        fill(255, 0, 0);
        text(num, i*(width/12), j*(height/7));
      } fill(255, 0, 0);
      
      num++;
    }
  }
  
  
}