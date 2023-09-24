/**
 * Dodging COVID-19
 * Hanif Hashim
 * 
 * Dodging COVID-19 simulation using P5. 
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }

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
    createCanvas(windowWidth, windowHeight);
    covid19.y = random(0, height);
    covid19.vx = covid19.speed
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    // standard movement code
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    // draw and move
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    noStroke();
    ellipse(covid19.x,covid19.y,covid19.size);
}