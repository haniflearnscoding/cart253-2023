/**
 * Looking for Love
 * Hanif Hashim
 * 
 * Looking for love simulation using P5.
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
}
let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3
}

let state = `simulation` //title, simulation, love, sadness
/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

    //position circles 
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

    //move circles randomly
    circle1.vx = random(-circle1.speed, circle1.speed);
    circle2.vx = random(-circle2.speed, circle2.speed);
    
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (state === `title`) {

    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `love`) {

    }
    else if (state === `sadness`) { 

    }
}

function simulation() { 
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function move() { 
    //move and draw
    circle1.x = circle1.x + circle1.vx;
    circle1.y = circle1.y + circle1.vy;
    
    circle2.x = circle2.x + circle2.vx;
    circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() { 
    //check if circles off canvas
    if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) { 
        //SAD ENDING
    }
}

function checkOverlap() { 
    //check if circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size / 2 + circle2.size / 2) { 
        //LOVE ENDING
    }
}

function display() { 
    //display
    ellipse(circle1.x, circle1.y, circle1.size);
    ellipse(circle2.x, circle2.y, circle2.size);
}