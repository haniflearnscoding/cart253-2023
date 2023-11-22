/**
 * Project 2: Table Minigame!
 * Hanif Hashim
 * 
 *Table minigame inspired by Super Mario Bros. DS, using js p5 library
 */

"use strict";


// Font used for characters on card
let cardFont;

//Bg sound used for game
let bgSound;

//SFX played when two pairs are flipped
let flipSound

//SFX played when deck is placed
let deckSound


// let game;
let currentState;



// Preload function
function preload() {

    cardFont = loadFont(`assets/fonts/C64_Pro_Mono-STYLE.otf`);
    bgSound = loadSound(`assets/sounds/casino_constant.wav`);
    flipSound = loadSound(`assets/sounds/mixkit-retro-arcade-casino-notification-211.wav`);
    deckSound = loadSound(`assets/sounds/mixkit-cards-deck-hits-1994.wav`);

}

// Setup function
function setup() {
    createCanvas(700, 400);

    userStartAudio();
    currentState = new Title();

}


// Draw function
function draw() {
    currentState.draw();

}

function keyPressed() {
    currentState.keyPressed();
}

function mousePressed() {
    currentState.mousePressed();
}


