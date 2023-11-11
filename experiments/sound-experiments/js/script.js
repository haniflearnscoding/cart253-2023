"use strict";

let barkSFX;

function preload() {
    barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
    createCanvas(600, 600);
    userStartAudio();
}

function draw() {
    background(0);

    // We can calculate the rate we should set the sound to by mapping
    // the mouse's x position to our desired range..
    let newRate = map(mouseX, 0, width, -3, 3);
    // And then set the rate of our sound file to the new rate
    // Note how we can do this while the sound is still playing!
    barkSFX.rate(newRate);
}

function mousePressed() {
    // Since we'll be playing around with the sound, it makes sense to loop it
    // so it doesn't stop.
    barkSFX.loop();

}