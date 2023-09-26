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
    size: 25,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
};

let user = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    maxSpeed: 10,
    acceleration: 0.5,
    size: 25,
    fill: {
        r: 255,
        g: 255,
        b: 255,
        a: 1
    },
    alphaAngle: 0
};

let bacteria = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};

let numStatic = 250;

/**
 * Description of preload
*/

function preload() {
    bacteria.image = loadImage('assets/images/bg.jpg');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

    //set covid19
    covid19.y = random(0, height);
    covid19.vx = covid19.speed

    angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    //
    for (let x = 0; x <= width; x += bacteria.size) {
        for (let y = 0; y <= height; y += bacteria.size) {
            image(bacteria.image, x, y, bacteria.size, bacteria.size);
        }
    }
    
    image(bacteria.image, bacteria.x, bacteria.y, bacteria.size, bacteria.size);
    
    //static
    for (let i = 0; i < numStatic; i++) { 
        let x = random(0, width);
        let y = random(0, height);
        stroke(255);
        point(x,y);
    }

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
    
    //transparency code
    let sinValue = sin(user.alphaAngle);
    user.fill.a = map(sinValue, -1, 1, 0, 255);

    //fill and draw user
    fill(user.fill.r, user.fill.g, user.fill.b, user.fill.a);

    user.alphaAngle += 0.8;
    
    //user movement & acceleration
    if (mouseX > user.x) {
        user.ax = user.acceleration;
    }
    else if (mouseX < user.x) { 
        user.ax = -user.acceleration;
    }

    if (mouseY > user.y) {
        user.ay = user.acceleration;
    }
    else if (mouseY < user.y) { 
        user.ay = -user.acceleration;
    }

    user.vx = user.vx + user.ax;
    user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
    user.vy = user.vy + user.ay;
    user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

    user.x = user.x + user.vx;
    user.y = user.y + user.vy;

    ellipse(user.x, user.y, user.size);
    
}