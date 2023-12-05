class Card {
    constructor(x, y, suite) {
        this.x = x; // Store the x position of the card
        this.y = y; // Store the y position of the card
        this.w = 50; // Store the width of the card
        this.h = 70; // Store the height of the card
        this.suite = suite; // Store the suite of the card
        this.flipped = false; // Store the initial state of the card to not be flipped
        this.checked = false; // Store the initial state of the card to not be checked
    }
    // display() draws our card onto the canvas
    display() {
        push();
        // Set the fill color if the card is flipped or not
        if (this.flipped) {
            fill(255); // Black if flipped
        } else {
            fill(0); // White if not flipped
        } noStroke();

        // Draw a rectangle that represents the card
        rect(this.x, this.y, this.w, this.h);

        // Display the suit text in the center of the card
        textFont(cardFont); // Set the font of the text
        textSize(20); // Set the font size
        fill(0); // Set the fill for the suit
        textAlign(CENTER, CENTER); // Center horizontal and vertical 
        text(this.suite, this.x + this.w / 2, this.y + this.h / 2); // Draw the suit in the middle of the card
        pop();

    }
    //Toggle the flipped state of the card
    cardFlip() {
        this.flipped = !this.flipped;
    }

    // Mouse Press function
    mousePressed() {
        // Store a reference of the current card
        let card = this;
        // Check if mouse position is within the card width & height
        if (
            mouseX > card.x &&
            mouseX < card.x + card.w &&
            mouseY > card.y &&
            mouseY < card.y + card.h
        ) {
            // Toggle the flipped state of the card
            if (!card.flipped) {
                card.cardFlip();
            }
        }
    }
}
