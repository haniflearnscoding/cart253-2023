let angle = 0;
let rectScale = 0;


/**
 * Description of preload
*/
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

    fill(255, 0, 0);
    rectMode(CENTER);
    translate(width/2,height/2);
    rotate(angle);
    scale(rectScale);
    rect(0, 0, 100, 100);
    pop();

    angle += 0.01;
    rectScale += 0.01;
}