"use strict";

// The microphone
let mic;
// A ghost
let ghost;
// A clown image
let clownImage;

function preload() {
    clownImage = loadImage(`assets/images/clown.png`);
}

function setup() {
    createCanvas(600, 600);

    // Create our AudioIn object
    mic = new p5.AudioIn();
    // Try to connect to the user's microphone
    mic.start();
    // Create our ghost
    ghost = createGhost(clownImage);
}

// Create a ghost in the center of the screen with various
// ghostly properties
function createGhost(ghostImage) {
    let ghost = {
        x: width / 2,
        y: height / 2,
        vx: 0,
        vy: 0,
        happySpeed: 1, // How fast the ghost moves when happy
        scaredSpeed: 25, // How fast the ghost moves when scared
        image: ghostImage, // The image to display
        alpha: 50, // How transparent is the ghost,
        state: `happy`, // How does the ghost feel right now?,
        scaredThreshold: 0.5 // How loud a sound makes the ghost afraid?
    };
    return ghost;
}

function draw() {
    background(0);

    // Get the current level of sound going into the microphone
    let level = mic.getLevel();

    // Check if the ghost gets scared
    if (level > ghost.scaredThreshold) {
        ghost.state = `afraid`;
        // The ghost should run away to the right
        ghost.vx = ghost.scaredSpeed;
    }

    // Check if the ghost is happy at the moment
    if (ghost.state === `happy`) {
        // If the ghost is happy, it moves around randomly
        let r = random(0, 1);
        if (r < 0.1) {
            ghost.vx = random(-ghost.happySpeed, ghost.happySpeed);
            ghost.vy = random(-ghost.happySpeed, ghost.happySpeed);
        }
    }

    // Move the ghost
    ghost.x += ghost.vx;
    ghost.y += ghost.vy;

    // Display the ghost
    push();
    tint(255, ghost.alpha);
    image(ghost.image, ghost.x, ghost.y);
    pop();
}