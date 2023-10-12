/**
 * Gardening Simulator
 * Hanif Hashim
 * 
 * Gardening simulator using js p5 library

 */

"use strict";

// objects for all plants in garden
let eggplant = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};

let lemon = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let mushroom = {
    x: 100,
    y: 100,
    size: 50,
    image: undefined
};
let potato = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let tangerine = {
    x: 100,
    y: 100,
    size: 50,
    image: undefined
};
let tomato = {
    x: 100,
    y: 100,
    size: 50,
    image: undefined
};
let watermelon = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let bee = {
    x: 100,
    y: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    maxSpeed: 10,
    acceleration: 0.5,
    size: 50,
    image: undefined
};

let market = {
    image: undefined
};

let state = `title`; // title, simulation

// fonts used for title screen
let futura; 
let helvetica; 

/**
 * loading all garden plants
*/
function preload() {
    //images
    eggplant.image = loadImage('assets/images/Eggplant.png');
    lemon.image = loadImage('assets/images/Lemon.png');
    mushroom.image = loadImage('assets/images/Mushroom.png');
    potato.image = loadImage('assets/images/Potato.png');
    tangerine.image = loadImage('assets/images/Tangerine.png');
    tomato.image = loadImage('assets/images/Tomato.png');
    watermelon.image = loadImage('assets/images/Watermelon.png');
    bee.image = loadImage('assets/images/Honeybee.png');

   
    
    //fonts
    futura = loadFont('assets/fonts/FuturaStd-Medium.otf');
    helvetica = loadFont('assets/fonts/HelveticaNeueLTStd-Lt.otf');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500, 500);
    
    textFont(helvetica);

     market = loadImage('assets/images/finalArtboard 1.png');
}


/**
 * Description of draw()
*/
function draw() {
    
    // strokeWeight(4);
    // stroke(51);
    // rect(0,0,500);
    
    //different states of the game
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    
}

function title() { 
    push();
    background(market);
    textSize(22); 
    fill(0);
    textAlign(LEFT);
    text(`Garden Simulator`, width / 18, height / 6);
    text(`Click to start`, width / 18, height / 4);
    // text(`Click to start`, width / 2, height / 2);
    pop();
    
    
}

function simulation() {
    display();
}
// tiling of plants
let plantCount = 0;

function display() { 
    if (plantCount < 10) { 
        let placementX = random(0, 500);
        let placementY = random(0, 500);
    
        image(mushroom.image, placementX, placementY, mushroom.size, mushroom.size);
        
        plantCount++;
    }
    if (plantCount < 10) { 
        let placementX = random(0, 500);
        let placementY = random(0, 500);
    
        image(tomato.image, placementX, placementY, tomato.size, tomato.size);
        
        plantCount++;
    }
    image(bee.image, bee.x, bee.y, bee.size, bee.size);
}
//bee movement & acceleration
function movement() {

    if (mouseX > bee.x) {
        bee.ax = bee.acceleration;
    }
    else if (mouseX < bee.x) { 
        bee.ax = -bee.acceleration;
    }

    if (mouseY > bee.y) {
        bee.ay = bee.acceleration;
    }
    else if (mouseY < bee.y) { 
        bee.ay = -bee.acceleration;
    }

    bee.vx = bee.vx + bee.ax;
    bee.vx = constrain(bee.vx, -bee.maxSpeed, bee.maxSpeed);
    bee.vy = bee.vy + bee.ay;
    bee.vy = constrain(bee.vy, -bee.maxSpeed, bee.maxSpeed);

    bee.x = bee.x + bee.vx;
    bee.y = bee.y + bee.vy;

    
 }
    

function mousePressed() { 
    if (state ===  `title`) { 
        state = `simulation`;
        background(255);
    }
}




