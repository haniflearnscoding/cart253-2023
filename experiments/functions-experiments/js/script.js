/**
 * Description of preload
*/

// let circle = {
//     x: 0,
//     y: 250,
//     size: 100,
//     vx: 1,
//     vy: 0
// }
function preload() {

}
/**
 * Description of setup
*/

function setup() {
    createCanvas(500,500);
}
/**
 * Description of draw()
*/

function draw() {
    background(0);
    parallels(0, 200, 100, 1, 100, 4);
    parallels(0, 300, 20, 10, 50, 12);
    parallels(0, 350, 80, 5, 5, 6);

}

// function parallels(x,y) { 
//     for (let i = 0; i < 20; i++) { 
//         noStroke();
//         fill(255);
//         rectMode(CENTER);
//         rect(x, y, 2, 50);
//         x += 5;
//     }
// }


function parallels(x, y, numLines, lineThickness, lineHeight, lineSpacing) {
  for (let i = 0; i < numLines; i++) {
    noStroke();
    let lineFill = map(i, 0, numLines, 0, 255);
    fill(lineFill);
    rectMode(CENTER);
    rect(x, y, lineThickness, lineHeight);
    x = x + lineSpacing;
  }
}