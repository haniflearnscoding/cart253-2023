let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.25,
    maxSpeed: 5
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
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    if (mouseX < circle.x) {
        circle.ax = -circle.acceleration;
    }
    else { 
        circle.ax = circle.acceleration;
    }

    if (mouseY < circle.y) {
        circle.ay = -circle.acceleration;
    
    }
    else { 
        circle.ay = circle.acceleration;
    }

    circle.vx = circle.vx + circle.ax;
    circle.vx = constrain(circle.vx, -circle.maxSpeed,circle.maxSpeed);
    circle.vy = circle.vy + circle.ay;

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x,circle.y,circle.size);
}