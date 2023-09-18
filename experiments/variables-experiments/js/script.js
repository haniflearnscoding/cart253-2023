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
    x: 0,
    y: 250,
    size: 100,
    speed: 2,
};


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
    circle.x += circle.speed;
    
    ellipse(circle.x,circle.y,circle.size);

    
}