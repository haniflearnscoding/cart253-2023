/**
 * Project 2: Memory!
 * Hanif Hashim
 * 
 * Memory, a card game discussing the metaphor of memory
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


//Variable that stores the state of the game
let currentState;

//Variable that keeps track of which round of the game
let currentGame = -1;

//Array with the dialogue for different games
let gameDialogue = [`Memory used to be described as an analogy for a library `, `scientists have proven the analogy to be false`, `metaphors are the only way of truly defining them`, `like lines in a leaf`, `like a match connecting fire to fire`, `like writing in the sand`, `like file cabinets`, `like a fog lifting`, `like a crumpled piece of paper slowly unfolding`, `like a phoenix rising from the ash`, `like knots in a string of beads`];

// Number of rows & columns for the card grid (1st round)
let rows = 1;
let cols = 2;

// Width & height of each round
let w = 50;
let h = 70;


// Preload function
function preload() {
    //Load font for cards
    cardFont = loadFont(`assets/fonts/C64_Pro_Mono-STYLE.otf`);
    //Load background sound for the game
    bgSound = loadSound(`assets/sounds/casino_constant.wav`);
    //Load sound effect for flipping cards
    flipSound = loadSound(`assets/sounds/mixkit-retro-arcade-casino-notification-211.wav`);
    //Load sound effect for placing cards
    deckSound = loadSound(`assets/sounds/mixkit-cards-deck-hits-1994.wav`);

}

// Setup function
function setup() {
    // Create a canvas 700x400 px
    createCanvas(700, 400);
    // Start AudioContext on user gesture
    userStartAudio();
    //Loop background sound for the game
    bgSound.loop();
    //Set the initial game state of the title screen with title "Memory"
    currentState = new Title(`Memory`);
}


// Draw function to display the state of the game
function draw() {
    currentState.draw();

}
// KeyPressed function to handle key presses bases on the state
function keyPressed() {
    currentState.keyPressed();
}
// MousePressed function to handle mouse presses based on the state
function mousePressed() {
    currentState.mousePressed();
}


