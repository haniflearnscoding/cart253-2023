"use strict";

let oscillator; // To store our oscillator
let t = 0; // The t (time) value to use with noise()
let tIncrease = 0.075; // How much to increase t each frame

function setup() {
    createCanvas(600, 600);
    userStartAudio();

    // Create a new oscillator
    oscillator = new p5.Oscillator(0, `sine`);
    // Set its amplitude down a bit or this could hurt
    oscillator.amp(0.25);
}

function draw() {
    background(0);

    // Generate a Perlin noise value based on our t value
    let perlinValue = noise(t);
    // Map the result (between 0 and 1) to a frequency range
    let newFreq = map(perlinValue, 0, 1, 110, 880);
    // Set the frequency of the oscillator based on the Perlin value
    oscillator.freq(newFreq);
    // Increase t
    t += tIncrease;
}

// mousePressed() starts our siren
function mousePressed() {
    oscillator.start();
}