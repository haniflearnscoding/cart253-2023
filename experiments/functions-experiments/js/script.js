function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  textAlign(CENTER, CENTER);
  textSize(64);
  textStyle(BOLD);

  fill(200, 100, 200);
  stroke(0);
  strokeWeight(2);
  
  text(`Hello, World!`,250,250);
}

