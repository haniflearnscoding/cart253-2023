
"use strict";

let backgroundShade = 0;
let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 5
}

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
    background(backgroundShade);
    
    circle.x = circle.x + circle.speed;

    if (circle.x > width) { 
        circle.speed = -circle.speed;
    }

    if (circle.x < 0) {
        circle.speed = -circle.speed;
    }

    if (mouseY < height / 2) { 
        fill(255,0,0);
    }

    if (mouseY > height / 2) { 
        fill(0,0,255);
    }
    
    ellipse(circle.x,circle.y,circle.size);

}