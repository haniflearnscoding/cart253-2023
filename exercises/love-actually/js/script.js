/**
 * Love, Actually
 * Hanif Hashim
 * 
 * Exercise: Love, actually, using p5
 */

"use strict";

let circle1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: 255
}
let circle2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 3,
    fill: 255,
    alpha: 255
}

let rectangle = {
    x: 0,
    y: 0,
    size: 100,
    fill: 255
}

let state = `title`; //title, simulation, love, sadness

/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);

    //position circles 
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

}

/**
 * Description of draw()
*/
function draw() {
    background(0);

    let change = random();
    if (change < 0.05) { 
        circle2.vx = random(-circle2.speed,circle2.speed);
        circle2.vy = random(-circle2.speed,circle2.speed);
    }
    
    //states
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    // else if (state === `darkness`) { 
    //     darkness();
    // }
    else if (state === `happiness`) { 
        happiness();
    }
    else if (state === `love`) {
        love();
    }
    else if (state === `sadness`) { 
        sadness();
    }
    
}

function title() { 
    push();
    textSize(64); 
    fill(200, 100, 100);
    textAlign(CENTER, CENTER);
    text(`LOVE?`, width / 2, height / 2);
    pop();
}

function simulation() { 
    move();
    checkOffScreen();
    checkOverlap();
    darkness();
    display();
}

function love() { 
    push();
    textSize(64); 
    fill(255, 150, 150);
    textAlign(CENTER, CENTER);
    text(`LOVE!`, width / 2, height / 2);
    pop();
}

function sadness() { 
    push();
    textSize(64); 
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(`:(`, width / 2, height / 2);
    pop();
}
function happiness() { 
    push();
    textSize(64); 
    fill(150, 150, 255);
    textAlign(CENTER, CENTER);
    text(`MANY FISHES IN TH SEA`, width / 2, height / 2);
    pop();
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
        state = `sadness`;
    }
}

function checkOverlap() { 
    //check if circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size / 2 + circle2.size / 2) { 
        state = `love`;
    }
}

function secretSquare() { 
    let d = dist(circle2.x, circle2.y, rectangle.x, rectangle.y);
    if (d < circle2.size / 2 + rectangle.size / 2) {
        state = `happiness`;
    }
}

function darkness() { 
    //circle 2 opacity lowers 
    if (circle2.x > 100) { 
        circle2.alpha -= 5;
    }
}

function display() { 
    //display circles
    fill(circle1.fill);
    ellipse(circle1.x, circle1.y, circle1.size);
    fill(circle2.fill, circle2.alpha);
    ellipse(circle2.x, circle2.y, circle2.size);
    
    //display rectangle
    fill(rectangle.fill);
    rect(rectangle.x,rectangle.y,rectangle.size);
}

function mousePressed() { 
    if (state ===  `title`) { 
        state = `simulation`;
    }
    //click to position & control circle 1
    circle1.x = mouseX;
    circle1.y = mouseY; 
}