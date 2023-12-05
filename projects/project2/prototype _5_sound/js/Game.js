class Game {
    constructor(cardFont, flipSound, deckSound, rows, cols, w, h) {
        this.table = {
            // An array to store the individual flowers
            cards: [],

            // The color of the table (background)
            tableColor: {
                r: 53,
                g: 101,
                b: 77
            },
            // An array of card suits
            suites: [`Hearts`, `Clubs`, `Spades`, `Diamonds`]
        };

        this.flippedCards = [];

        //check for all cards flipped on table for ending state
        this.allCardsFlipped = [];

        // Font used for characters on card
        this.cardFont = cardFont;

        //Bg sound used for game
        // this.bgSound = bgSound;

        //SFX played when two pairs are flipped
        this.flipSound = flipSound;

        //SFX played when deck is placed
        this.deckSound = deckSound;

        //Number of rows and columns
        this.rows = rows;
        this.cols = cols;

        //Width and height of each card
        this.w = w;
        this.h = h;

        // Create a new card using the arguments
        this.createDeck();
        this.placeDeck(width, height);

    }

    // Function to create a deck of cards with a different suit
    createDeck() {
        // Create Deck
        for (let i = 0; i < rows * cols; i += 2) {
            let suite = random(this.table.suites);
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

            //Create two cards with the same suit and add it to the table
            let card = new Card(0, 0, char)
            this.table.cards.push(card);
            let card2 = new Card(0, 0, char)
            this.table.cards.push(card2);
        }

    }
    //Function to place cards on the table
    placeDeck(width, height) {
        //Shuffle the cards
        this.table.cards.sort(function (a, b) {
            return 0.5 - Math.random();
        });
        //Loop through rows and columns 
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Calculate the center of the canvas
                let centerX = width / 2;
                let centerY = height / 2;

                // Calculate the starting position for the cards
                let startX = centerX - (cols / 2) * w * 1.25;
                let startY = centerY - (rows / 2) * h * 1.25;

                //Calculate the position of each card
                let x = startX + (c * w) * 1.25;
                let y = startY + (r * h) * 1.25;

                //Calculate the index of the current card 
                let cardIndex = c + r * cols;

                //Set the position of the card
                this.table.cards[cardIndex].x = x;
                this.table.cards[cardIndex].y = y;

                //Play the sound effect when deck is placed
                deckSound.play();
            }
        }
    }

    //Draw function
    draw() {
        this.simulation()
    }

    //Simulation function
    simulation() {
        // Display the table
        background(this.table.tableColor.r, this.table.tableColor.g, this.table.tableColor.b);
        this.displayCards();
    }

    //function that dislays cards on the table
    displayCards() {
        // Loop through all the cards in the array and display them
        for (let i = 0; i < this.table.cards.length; i++) {
            let card = this.table.cards[i];
            card.display();
        }
    }
    //MousePressed function to handle mouse interations
    mousePressed() {
        // Loop through all the cards and check if the mouse is over each card
        for (let i = 0; i < this.table.cards.length; i++) {
            let card = this.table.cards[i];
            card.mousePressed();
        }

        //When mouse pressed, call following functions
        this.matchCard();
        this.triggerEnd();
        this.resetFlip();
        this.checkEnding()

    }
    //function that matches the suits of a pair of cards
    matchCard() {
        // Loop through all the cards to find flipped ones
        for (let i = 0; i < this.table.cards.length; i++) {
            let card = this.table.cards[i];
            // Check if the card is flipped and not already in the flippedCards array
            if (card.flipped && this.flippedCards.length < 2 && !this.flippedCards.includes(card) && card.checked === false) {
                // Add the flipped card to the array
                this.flippedCards.push(card);
            }
        }

    }
    // Function that checks if all cards on the table are flipped
    triggerEnd() {
        // Check the number of flipped cards
        if (this.flippedCards.length === 2 && this.flippedCards[0].suite === this.flippedCards[1].suite) {
            // Two matching cards are flipped, push them into allCardsFlipped
            this.allCardsFlipped.push(this.flippedCards[0], this.flippedCards[1]);
        }
    }

    resetFlip() {
        // Check if there are exactly two flipped cards
        if (this.flippedCards.length === 2) {

            // Check if the suites of the two flipped cards are the same
            if (this.flippedCards[0].suite === this.flippedCards[1].suite) {
                this.flippedCards[0].checked = true;
                this.flippedCards[1].checked = true;

                // Play sound when two matches
                flipSound.play();

                // Cards have the same suite, do something (e.g., remove the matched cards)
                console.log("Matched!");
            } else {
                // Cards have different suites, flip them back or take other actions
                console.log("Not matched!");

                // if (shouldFlipBack) {

                for (let i = 0; i < this.table.cards.length; i++) {
                    let card = this.table.cards[i];
                    if (this.flippedCards.includes(card)) {
                        setTimeout(() => {
                            card.cardFlip(); // Flip back only the cards in flippedCards array
                        }, 500);
                    }
                }
                // }
            }


            // Reset the array of flipped cards for the next turn
            this.flippedCards = [];
        }

    }

    checkEnding() {
        if (this.allCardsFlipped.length === this.table.cards.length) {
            currentGame += 1;
            setTimeout(() => {
                console.log("Checking ending...");
                // currentState = new Title(gameDialogue[currentGame]);

                // Increment rows and cols
                rows += 1;
                cols += 2;

                // Decrease the size of the cards
                // w -= 10;
                // h -= 10;

                // width += 10
                // height += 10

                // Increase canvas size
                const newCanvasWidth = width + 50;  // Adjust the value based on your requirements
                const newCanvasHeight = height + 50;  // Adjust the value based on your requirements
                createCanvas(newCanvasWidth, newCanvasHeight);

                // Update the currentState with a new Title and game dialogue
                currentState = new Title(gameDialogue[currentGame]);

            }, 500);
        }
    }


    // music() {
    //     // Loop bg sound for the whole game
    //     bgSound.loop();
    // }

    keyPressed() {

    }

}