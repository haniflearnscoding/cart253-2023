class Game {
    constructor(cardFont, bgSound, flipSound, deckSound) {
        this.table = {
            // An array to store the individual flowers
            cards: [],

            // The color of the table (background)
            tableColor: {
                r: 53,
                g: 101,
                b: 77
            },
            suites: [`Hearts`, `Clubs`, `Spades`, `Diamonds`]
        };

        this.flippedCards = [];

        //check for all cards flipped on table for ending state
        this.allCardsFlipped = [];

        this.state = `title`; // title, simulation, end


        // Font used for characters on card
        this.cardFont = cardFont;

        //Bg sound used for game
        this.bgSound = bgSound;

        //SFX played when two pairs are flipped
        this.flipSound = flipSound;

        //SFX played when deck is placed
        this.deckSound = deckSound;

        this.rows = 3;
        this.cols = 4

        this.w = 50;
        this.h = 70;

        //Typewriter narating the story of the game
        this.typewriter;

        // A variable to store the currently active state object (starts empty)
        this.currentState = new Title();

        // Create a new card using the arguments
        this.createDeck();
        this.placeDeck(width, height);
        console.log(this.table);
        // console.log(this.flippedCards);
        // console.log(this.allCardsFlipped);
    }

    createDeck() {
        // Create Deck
        for (let i = 0; i < this.rows * this.cols; i += 2) {
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

            let card = new Card(0, 0, char)
            this.table.cards.push(card);
            let card2 = new Card(0, 0, char)
            this.table.cards.push(card2);


        }
    }

    placeDeck(width, height) {
        this.table.cards.sort(function (a, b) {
            return 0.5 - Math.random();
        });

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                // Calculate the center of the canvas
                let centerX = width / 2;
                let centerY = height / 2;

                // Calculate the starting position for the cards
                let startX = centerX - (this.cols / 2) * this.w * 1.25;
                let startY = centerY - (this.rows / 2) * this.h * 1.25;

                // Create our cards by counting up to the number of the cards
                let x = startX + (c * this.w) * 1.25;
                // console.log(centerX, this.cols, this.w);

                let y = startY + (r * this.h) * 1.25;

                let cardIndex = c + r * this.cols;
                this.table.cards[cardIndex].x = x;
                // console.log(c, r, this.rows, this.cols, cardIndex);
                this.table.cards[cardIndex].y = y;
            }
        }
    }

    draw() {
        this.simulation()
        // console.log(`hello`);
    }

    simulation() {
        // Display the table
        background(this.table.tableColor.r, this.table.tableColor.g, this.table.tableColor.b);
        this.displayCards();
    }

    displayCards() {
        // Loop through all the cards in the array and display them
        for (let i = 0; i < this.table.cards.length; i++) {
            let card = this.table.cards[i];

            card.display();

        }

    }

    mousePressed() {
        // Loop through all the cards and check if the mouse is over each card
        for (let i = 0; i < this.table.cards.length; i++) {
            let card = this.table.cards[i];
            card.mousePressed();
        }

        this.matchCard();
        this.triggerEnd();
        this.resetFlip();
        this.checkEnding()
    }

    matchCard() {
        // Array to store flipped cards

        // Loop through all the cards to find flipped ones
        for (let i = 0; i < this.table.cards.length; i++) {
            // for (let j = 0; j < this.table.cards.length; j++) {
            let card = this.table.cards[i];
            // let card2 = this.table.cards[j];

            // Check if the card is flipped
            if (card.flipped && this.flippedCards.length < 2 && !this.flippedCards.includes(card) && card.checked === false) {
                // Add the flipped card to the array
                this.flippedCards.push(card);
                console.log(this.flippedCards.length);
            }

            // if (card2.flipped && this.flippedCards.length < 2 && !this.flippedCards.includes(card2) && card2.checked === false) {
            //     //When two matching cards are flipped, push the card into allFlippedCards
            //     this.allCardsFlipped.push(card2);
            //     console.log(this.allCardsFlipped.length);
            // }

            // }


        }

    }

    triggerEnd() {
        // Check the number of flipped cards
        if (this.flippedCards.length === 2 && this.flippedCards[0].suite === this.flippedCards[1].suite) {
            // Two matching cards are flipped, push them into allCardsFlipped
            this.allCardsFlipped.push(this.flippedCards[0], this.flippedCards[1]);
            console.log(this.allCardsFlipped.length);
        }
    }

    resetFlip() {
        // console.log("resetFlip function called"); // Add this line

        // Check if there are exactly two flipped cards
        if (this.flippedCards.length === 2) {
            // console.log(flippedCards.length);

            // let shouldFlipBack = true; // Flag to determine whether any card should be flipped back

            // Check if the suites of the two flipped cards are the same
            if (this.flippedCards[0].suite === this.flippedCards[1].suite) {
                this.flippedCards[0].checked = true;
                this.flippedCards[1].checked = true;

                // Play sound when two matches
                // this.flipSound.play();

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
            setTimeout(() => {
                currentState = new Title();
                currentState.updateTitleText("New Title Text");
            }, 500);
        }
    }


    music() {
        // Loop bg sound for the whole game
        this.bgSound.loop();
    }

    keyPressed() {

    }

}