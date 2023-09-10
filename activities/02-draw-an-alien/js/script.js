/**
 * Draw an Alien
 * Hanif Hashim
 * 
 * Using p5’s drawing instructions to draw an alien
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Drawing different parts of the Alien
*/
function setup() {

    // Draw Canvas and setting up background color
    createCanvas(640, 480);
    background(255, 192, 203);

    //Draw & fill head
    noStroke();
    fill(220, 220, 220);
    ellipse(320,240,300, 450);

    //Draw & fill eyes
    fill(0,0,0)
    ellipse(200,320,100)
    ellipse(350, 320, 100)
    
    //Draw and fill nostrils
    
    fill('rgba(0,0,0, 0.7)');
    ellipse(250,400,20);
    ellipse(285, 400, 20);
    
    //Draw and fill mouth
    fill(219,112,147)
    stroke(255, 50, 122);
    strokeWeight(5);
    rectMode(CENTER);
    rect(280,440,75,25);


    


}


/**
 * Description of draw()
*/
function draw() {

}