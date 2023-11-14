/**
 * Project 2: Sound Prototype
 * Hanif Hashim
 * 
 * Exploring sound in relation to this project
 */

"use strict";

// Our table

let table = {
    // An array to store the individual flowers
    cards: [],
    // How many cards are on the table
    numCards: 4,
    // The color of the table (background)
    tableColor: {
        r: 53,
        g: 101,
        b: 77
    }
};

// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bf4`, `C4`, `Db4`, `Eb4`, `F4`];

// Jazz Major Scale
let majorScale = [`G`, `A`, `B`, `C`, `D`, `E`, `F`];

// The microphone
let mic;

// Background music
let bgMusic

// Playback Rate, set to normal
let playbackRate = 1;


let state = `title`; // title, simulation, end

// Preload function
function preload() {
    bgMusic = loadSound('assets/sounds/memoryMatch.mp3');

}

// Setup function
function setup() {
    createCanvas(500, 500);
    userStartAudio();
    bgMusic.loop();

    // Create our AudioIn object
    mic = new p5.AudioIn();
    // Try to connect to the user's microphone
    mic.start();


    // Create our cards by counting up to the number of the flowers
    for (let i = 0; i < table.numCards; i++) {
        // Create variables for our arguments for clarity
        let x = random(0, width);
        let y = random(0, height);
        // Create a new card using the arguments
        let note = random(notes);
        let card = new Card(x, y, note)
        // Add the card to the array of cards
        table.cards.push(card);
    }

}


// Draw function, different states of the game
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

function title() {
    push();
    //set the bg img white
    background(255);

    //text settings 
    textSize(22);
    fill(0);
    textAlign(CENTER);

    //text content & placement
    text(`Clap to shuffle the deck`, width / 2, height / 2);
    pop();
}

function end() {
    push();
    //set the bg img white
    background(255);

    //text settings 
    textSize(22);
    fill(0);
    textAlign(CENTER);

    //text content & placement
    text(`Placeholder`, width / 2, height / 2);
    pop();
}

function simulation() {
    // Display the table
    background(table.tableColor.r, table.tableColor.g, table.tableColor.b);
    displayCards();
    scaredCards();

}

// Card function
function displayCards() {
    // Loop through all the cards in the array and display them
    for (let i = 0; i < table.cards.length; i++) {
        let card = table.cards[i];
        card.display();

    }
}

function scaredCards() {
    // Create an array to store indices of cards to be removed
    let cardsToRemove = [];

    // Loop through all the cards in the array and display them
    for (let i = 0; i < table.cards.length; i++) {
        let card = table.cards[i];
        card.clap()
        if (card.state === 'afraid') {
            // Add the index of the scared card to the removal array
            cardsToRemove.push(i);
        }
    }

    // Remove the scared cards outside the loop
    for (let i = cardsToRemove.length - 1; i >= 0; i--) {
        table.cards.splice(cardsToRemove[i], 1);
    }

    // Generate new cards if needed
    if (cardsToRemove.length > 0) {
        generateNewCards();
        playbackRate += 0.05;
        bgMusic.rate(playbackRate);
    }
}

function generateNewCards() {
    for (let i = 0; i < table.numCards; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let note = random(notes);
        let card = new Card(x, y, note);
        table.cards.push(card);
    }
}

// Mouse Click function, move from title screen to simulation
function mouseClicked() {
    if (state === `title`) {
        state = `simulation`;
    }
}