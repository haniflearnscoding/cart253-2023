/**
 * Dodge-em
 * Hanif Hashim
 * 
 * Dodging COVID-19 simulation using P5. - Exercise 2
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

let user = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    maxSpeed: 100,
    acceleration: 4,
    size: 100,
    fill: 255
}

let numStatic = 5000;

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
    //set covid19
    covid19.y = random(0, height);
    covid19.vx = covid19.speed
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //static
    for (let i = 0; i < numStatic; i++) { 
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x,y);
    }

    //set user
    // user.x = mouseX;
    // user.y = mouseY;

    // standard movement code
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    //check if circles touch
    let d = dist(user.x, user.y, covid19.x, covid19.y);
    if (d < covid19.size/2 + user.size/2) { 
        noLoop();
    }

    // draw and move covid19
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    noStroke();
    ellipse(covid19.x, covid19.y, covid19.size);
    
    //resets to the left
    if (covid19.x > width) { 
        covid19.x = 0;
        covid19.y = random(0,height);
    }

    //fill and draw user
    fill(user.fill);

    //user movement & acceleration

    if (mouseX > user.x) {
        user.vx = user.acceleration;
    }
    else if (mouseX < user.x) { 
        user.vx = -user.acceleration;
    }

    if (mouseY > user.y) {
        user.vy = user.acceleration;
    }
    else if (mouseY < user.y) { 
        user.vy = -user.acceleration;
    }

    user.vx = user.vx + user.ax;
    user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
    user.vy = user.vy + user.ay;
    user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

    user.x = user.x + user.vx;
    user.y = user.y + user.vy;


    ellipse(user.x, user.y, user.size);
}