/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let bgShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 100;
let circleSpeed = 2;
let circleAcc = 0.25;

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
    circleX += circleSpeed;
    circleSpeed += circleAcc;
    ellipse(circleX,circleY,circleSize);

    
}