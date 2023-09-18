/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let bgShade = 0;


let circle = {
    x: 250,
    y: 250,
    size: 100,
    speed: 1,
    fill: 0
};

// let circleX = 0;
// let circleY = 250;
// let circleSize = 200;
// let circleSpeed = 2;



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
    

}


/**
 * Description of draw()
*/

function draw() {
    
    background(bgShade);

    circle.speed = random(-5, 5);
    circle.x += circle.speed;
    circle.y = random(0, height);
    circle.size = random(10,100);
    
    circle.fill = random(0,255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

    let randomNum = random();
    console.log(randomNum);
    
    // console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSize: ${circleSize}, circleSpeed: ${circleSpeed} `);
    

    
}