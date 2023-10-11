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
    size: 40,
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
    size: 100,
    image: undefined
};
let tomato = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let watermelon = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};

let state = `title`; // title, simulation

let futura; // font used for title screen

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
    
    //fonts
    futura = loadFont('assets/fonts/FuturaStd-Medium.otf');
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(futura);
}


/**
 * Description of draw()
*/
function draw() {
    // background(0);

    //different states of the
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    
}

function title() { 
    push();
    textSize(64); 
    fill(255);
    textAlign(CENTER, CENTER);
    text(`Garden simulator`, width / 2, height / 2);
    // text(`Click to start`, width / 2, height / 2);
    pop();
}

function simulation() {
    display();
}
// tiling of plants
function display() { 
    for (let x = 0; x <= width; x += mushroom.size) {
       for (let y = 0; y <= height; y += mushroom.size) {
           image(mushroom.image, x, y, mushroom.size, mushroom.size);
       }
    }
}

function mousePressed() { 
    if (state ===  `title`) { 
        state = `simulation`;
    }
}




