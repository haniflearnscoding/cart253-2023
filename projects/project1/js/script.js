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
    size: 100,
    image: undefined
};
let watermelon = {
    x: 100,
    y: 100,
    size: 100,
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

     market = loadImage('assets/images/title_screen2.png');
}


/**
 * Description of draw()
*/
function draw() {
    
    background(market);
    // strokeWeight(4);
    // stroke(51);
    // rect(0,0,500);

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
        background(255);
    }
}




