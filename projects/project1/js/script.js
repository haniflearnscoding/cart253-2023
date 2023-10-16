/**
 * Gardening Simulator
 * Hanif Hashim
 * 
 * Gardening simulator using js p5 library

 */

"use strict";

//initialize array
let plants = [];

// objects for all plants in garden
let eggplant = {
    x: 100,
    y: 100,
    size: 50,
    image: undefined
};

let lemon = {
    x: 100,
    y: 100,
    size: 50,
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
    size: 50,
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
    size: 50,
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

plants.push(eggplant, lemon, mushroom, potato, tangerine, tomato, watermelon);

// bg image
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

    for (let i = 0; i < plants.length; i++) { 
        plants[i].x = random(50, width-50);
        plants[i].y = random(50, height-50);
    }
}

/**
 * Description of draw()
*/
function draw() {  
    //different states of the game
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {  
        simulation();
    }
}
/**
 * Title Screen
*/
function title() { 
    push();
    background(market);
    textSize(22); 
    fill(0);
    textAlign(LEFT);
    text(`Garden Simulator`, width / 18, height / 6);
    text(`Click to start`, width / 18, height / 4);
    pop();
}

function simulation() {
    display();
    movement();
    checkOverlap();
}


function display() { 
    background(255);
    image(bee.image, bee.x, bee.y, bee.size, bee.size);

    for (let i = 0; i < plants.length; i++) {
        image(plants[i].image, plants[i].x, plants[i].y, plants[i].size, plants[i].size);
    }
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

let currentPlantIndex = 0;
// define an array of different plants
let availablePlants = [eggplant, lemon, mushroom, potato, tangerine, tomato, watermelon];

let allPlantsCaught = false;

function checkOverlap() { 
    // create a variable to track whether an overlap occurred
    let overlapDetected = false;

    for (let i = 0; i < plants.length; i++) {
        let d = dist(bee.x, bee.y, plants[i].x, plants[i].y);
        if (d < bee.size / 2 + plants[i].size / 2) {
            // replace the overlapping plant with the next available plant
            let nextPlantIndex = (currentPlantIndex + 1) % availablePlants.length;
            plants[i] = availablePlants[nextPlantIndex];
            overlapDetected = true;

            // update the current plant index
            currentPlantIndex = nextPlantIndex;

            // check if all plants have been caught in this round
            if (plants.every(plant => plant === plants[0])) {
                allPlantsCaught = true;
            }
        }
    }
    if (overlapDetected) {
        currentPlantIndex = (currentPlantIndex + 1) % plants.length;
    }
    if (allPlantsCaught) {
        for (let i = 0; i < plants.length; i++) {
            plants[i].x = random(50, width - 50);
            plants[i].y = random(50, height - 50);
        }
        allPlantsCaught = false;
    }
}

    
function mousePressed() { 
    if (state ===  `title`) { 
        state = `simulation`;
    }
}




