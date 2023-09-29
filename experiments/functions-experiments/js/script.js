/**
 * Description of preload
*/

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0
}
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

    ellipse(width/2,height/2,100,100);

}