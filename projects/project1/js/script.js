/**
 * Gardening Simulator
 * Hanif Hashim
 * 
 * Gardening simulator using js p5 library
 * 
 * Emoji assets attribution: Figma Apple Emoji Pack
 * https://www.figma.com/community/file/937774188065101204
 * 
 * 
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
// object for user - bee
let bee = {
    x: 100,
    y: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    maxSpeed: 20,
    acceleration: 1,
    size: 50,
    image: undefined
};

// add all plants to plants array
plants.push(eggplant, lemon, mushroom, potato);

// bg image
let market = {
    image: undefined
};

// title, simulation, end
let state = `title`; 

// fonts used for title screen
let futura; 
let helvetica; 

// define an array of different plants
let availablePlants = [tangerine, tomato, watermelon];

// acceleration of bee at which ending is triggered
const accelerationThreshold = 10;

// variable for polinated plants
let poliPlant;


/**
 * load all garden plants
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
 * setup canvas & plants
*/
function setup() {
    createCanvas(500, 500);

    //font used in title screen
    textFont(helvetica);

    //img loaded for title screen
    market = loadImage('assets/images/finalArtboard 1.png');

    //place plants on canvas in random positions
    for (let i = 0; i < plants.length; i++) { 
        plants[i].x = random(50, width-50);
        plants[i].y = random(50, height-50);
    }
}

/**
 * go through different states of the game
*/
function draw() {  
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {  
        simulation();
    }
    else if (state === `end`) {  
        end();
    }
}
/**
 * title screen
*/
function title() { 
    push();
    //set the bg img as the market
    background(market);

    //text settings 
    textSize(20); 
    fill(0);
    textAlign(LEFT);

    //text content & placement
    text(`Bee Simulator`, width / 18, height / 6);
    text(`Go polinate plants!`, width / 18, height / 4);
    text(`Click to start`, width / 18, height / 2);
    pop();
}
/**
 * end screen
*/
function end() { 
    push();
    //set the bg img white
    background(255);

    //text settings 
    textSize(22); 
    fill(0);
    textAlign(CENTER);

    //text content & placement
    text(`The bee has polinated the garden!`, width / 2, height / 2);
    pop();
}

/**
 * calling other functions that make gameplay
*/
function simulation() {
    movement();
    display();
    checkOverlap();
    ending();
}

/**
 * renders all elements of game
*/
function display() {
    //set bg as white
    background(255);

    //display bee
    image(bee.image, bee.x, bee.y, bee.size, bee.size);

    //display plants from array
    for (let i = 0; i < plants.length; i++) {
        image(plants[i].image, plants[i].x, plants[i].y, plants[i].size, plants[i].size);
    }
}
/**
 * bee movement & acceleration
*/
function movement() {

    // if mouse is to the right of circle position 
    if (mouseX > bee.x) {
        // set bee's acceleration to positive to move to the right
        bee.ax = bee.acceleration;
    }
    // if mouse is to the left of circle position
    else if (mouseX < bee.x) { 
        // set bee's acceleration to negative to move to the left
        bee.ax = -bee.acceleration;
    }
    // if mouse is below the circle position
    if (mouseY > bee.y) {
        // set bee's acceleration to positive to move it down
        bee.ay = bee.acceleration;
    }
    // if mouse is above the circle position
    else if (mouseY < bee.y) { 
        // set bee's acceleration to negative to move it up
        bee.ay = -bee.acceleration;
    }

    //update velocity based on acceleration
    //contrain velocity to not exceed max speed
    bee.vx = bee.vx + bee.ax;
    bee.vx = constrain(bee.vx, -bee.maxSpeed, bee.maxSpeed);
    bee.vy = bee.vy + bee.ay;
    bee.vy = constrain(bee.vy, -bee.maxSpeed, bee.maxSpeed);

    //change vx & vy to circle position
    bee.x = bee.x + bee.vx;
    bee.y = bee.y + bee.vy;

}

/**
 * when bee overlaps plant
*/

function checkOverlap() { 
    //go through each plant in array
    for (let i = 0; i < plants.length; i++) {

        //distance between bee and plant
        let d = dist(bee.x, bee.y, plants[i].x, plants[i].y)

        //if distance is less than radius of bee & plant, they overlap
        if (d < bee.size / 2 + plants[i].size / 2) {

            // assign polinated plant to variable
            poliPlant = plants[i];

            //have an index for next plant 
            let randomPlantIndex = floor(random(0, availablePlants.length));
            plants[i] = availablePlants[randomPlantIndex];

            //remove polinated plant from available plants
            availablePlants.splice(randomPlantIndex, 1);

            //place next plant randomly
            plants[i].x = random(50, width - 50);
            plants[i].y = random(50, height - 50);

            //add non-polinated plant to polinated plants
            availablePlants.push(poliPlant);
            
            // add acceleration to bee each plant overlap
            bee.acceleration += 0.3;
        }
    }
}

/**
 * start of game function
*/  
function mousePressed() { 
    // if mouse is pressed, trigger simulation
    if (state ===  `title`) { 
        state = `simulation`;
    }
}
/**
 * end of game function
*/  
function ending() { 
    // if bee acceleration reaches threshold, trigger end simulation
    if (bee.acceleration >= accelerationThreshold) {
        state = "end";
    }
}
