"use strict";

// An array of different playback rates to use with our dog bark
// 1 means normal rate, greater than one increases the speed and pitch
// So 3 is three times faster with a correspondingly higher pitch.
let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

// Our sound effect
let barkSFX;

// preload() loads the barking sound effect
function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

// setup() the canvas ready
function setup() {
  createCanvas(600, 600);
}

// draw() does nothing much
function draw() {
  background(0);
}

// mousePressed() plays a dog bark at a randomly chosen rate
function mousePressed() {
  // Choose a random rate from the array
  let barkRate = random(rates);
  // Set the barking sound effect to that rate
  barkSFX.rate(barkRate);
  // Play the barking sound effect
  barkSFX.play();
}