/**
 * Exercise: I like to move it!
 * Hanif Hashim
 * 
 * 
 * 
 */

"use strict";

let bg = {
    r: 0,
    g: 0,
    b: 0
        
}
    
let circle1 = {
    x: 0,
    y: 250,
    size: 100,
    growthRate: 1,
    fill: 255,
    alpha: 200,
    speed:1

}
let circle2 = {
    x: 500,
    y: 250,
    size: 50,
    sizeRatio: 0.75,
    fill: 255,
    alpha: 200,
    speed: -1

}

let circle3 = {
    x: 250,
    y: 250,
    size: 50,
    fill: 0
    

}

let rect1 = {
    x: 250,
    y: 500,
    size: 150,
    speed: -1,
    growthRate: 1
}

let tri1 = {
    x1: 250,
    y1: 0,
    x2: 0,
    y2: 500,
    x3: 500,
    y3: 500

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

    createCanvas(500, 500);
    noStroke();


}


/**
 * Description of draw()
*/
function draw() {

     // background
    background(bg.r, bg.g, bg.b);
    bg.r = map(circle1.size, 100, width, 0, 255);
    bg.r += 10;
    bg.g += 10;
    bg.b += 10;

    //circle 1
   
    circle1.x = circle1.x + circle1.speed;
    circle1.x = constrain(circle1.x, 0, width / 2);
    circle1.size = circle1.size + circle1.growthRate; 
    circle1.size = constrain(circle1.size,0,width);
    fill(circle1.fill, circle1.alpha);
    ellipse(circle1.x, circle1.y, circle1.size);

    //circle 2
    circle2.x = circle2.x + circle2.speed
    circle2.x = constrain(circle2.x, width / 2, width);
    circle2.size = circle1.size * circle2.sizeRatio;
    fill(circle2.fill, circle2.alpha);
    ellipse(circle2.x, circle2.y, circle2.size);

    //circle 3
    ellipse(circle3.x, circle3.y, circle3.size);
    circle3.x = mouseX;
    circle3.y = mouseY;
    circle3.fill = map(mouseX, 0, width, 0, 255);
    fill(circle3.fill);

}