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


//
let currentState;

//
let currentGame = -1;
let gameDialogue = [`Memory used to be described as an analogy for a library `, `scientists have proven the analogy to be false`, `metaphors are the only way of truly defining them`, `like lines in a leaf`, `like a match connecting fire to fire`, `like writing in the sand`, `like file cabinets`, `like a fog lifting`, `like a crumpled piece of paper slowly unfolding`, `like a phoenix rising from the ash`, `like knots in a string of beads`];

//
let rows = 1;
let cols = 2;

//
let w = 50;
let h = 70;


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
    bgSound.loop();

    userStartAudio();
    currentState = new Title(`Memory`);


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


