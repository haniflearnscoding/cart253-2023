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
    numCards: 2,
    // The color of the table (background)
    tableColor: {
        r: 53,
        g: 101,
        b: 77
    },
    suites: [`Hearts`, `Clubs`, `Spades`, `Diamonds`]
};

let state = `title`; // title, simulation, end


// Font used for characters on card
let cardFont;

let rows = 3;
let cols = 4

// Preload function
function preload() {
    cardFont = loadFont(`assets/fonts/C64_Pro_Mono-STYLE.otf`);

}

// Setup function
function setup() {
    createCanvas(500, 500);


    // Create our cards by counting up to the number of the cards
    for (let i = 0; i < table.numCards; i++) {
        for (let j = 0; j < table.suites.length; j++) {
            console.log(`hello`)
            let x = random(10)
            let y = random(10)


            // rect(c * this.w, r * this.h, this.w, this.h);

            let suite = table.suites[j];
            // Assign a character based on your custom font mapping
            let char;
            switch (suite) {
                case 'Hearts':
                    char = '\u2665'; // Replace with the actual character for hearts
                    break;
                case 'Clubs':
                    char = '\u2663'; // Replace with the actual character for clubs
                    break;
                case 'Spades':
                    char = '\u2660'; // Replace with the actual character for clubs
                    break;
                case 'Diamonds':
                    char = '\u2666'; // Replace with the actual character for clubs
                    break;
                default:
                    char = ''; // Default character if not specified
            }
            // Create a new card using the arguments
            let card = new Card(x, y, char)
            // let card2 = new Card(x2, y2, char)
            // Add the card to the array of cards
            table.cards.push(card);



            // Create variables for our arguments for clarity
            // let x = random(0, width);
            // let y = random(0, height);
            // let x2 = random(0, width);
            // let y2 = random(0, height);

        }

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

function simulation() {
    // Display the table
    background(table.tableColor.r, table.tableColor.g, table.tableColor.b);
    displayCards();
}

// Flower function
function displayCards() {

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Loop through all the cards in the array and display them
            for (let i = 0; i < table.cards.length; i++) {
                let card = table.cards[i];
                card.x = (c * card.w) * 1.25;
                card.y = (r * card.h) * 1.25;
                card.display();
            }
        }
    }
}

// Mouse Click function, move from title screen to simulation
function mouseClicked() {
    if (state === `title`) {
        state = `simulation`;
    }
}

function mousePressed() {
    // Loop through all the cards and check if the mouse is over each card
    for (let i = 0; i < table.cards.length; i++) {
        let card = table.cards[i];
        if (
            mouseX > card.x &&
            mouseX < card.x + card.w &&
            mouseY > card.y &&
            mouseY < card.y + card.h
        ) {
            console.log("Mouse pressed on card:", card);

            // Toggle the pressed state of the card
            if (!card.flipped) {
                card.cardFlip();
            }
        }
    }
}