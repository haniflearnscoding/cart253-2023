/**
 * Project 2: Table Minigame!
 * Hanif Hashim
 * 
 *Table minigame inspired by Super Mario Bros. DS, using js p5 library
 */

"use strict";

// Our table

let table = {
    // An array to store the individual flowers
    cards: [],
    // How many cards are on the table
    numCards: 3,
     // The color of the table (background)
     tableColor: {
        r: 53, 
        g: 101,
        b: 77
     }
};

let state = `title`; // title, simulation, end

// Preload function
function preload() {

}

// Setup function
function setup() {
    createCanvas(500,500);

    // Create our cards by counting up to the number of the flowers
    for (let i = 0; i < table.numCards; i++){
        // Create variables for our arguments for clarity
        let x = random(0, width);
        let y = random(0, height);
        // Create a new card using the arguments
        let card = new Card (x, y)
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
    text(`Placeholder`, width / 2, height / 2);
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

function simulation(){
    // Display the table
    background(table.tableColor.r, table.tableColor.g, table.tableColor.b);
    displayCards();
}

// Flower function
function displayCards() {
    // Loop through all the cards in the array and display them
    for (let i = 0; i < table.cards.length; i++){
        let card = table.cards[i];
        console.log(`test`);
        card.display();
    }
}

// Mouse Click function, move from title screen to simulation
function mouseClicked(){
    if (state ===  `title`) { 
        state = `simulation`;
    }
}