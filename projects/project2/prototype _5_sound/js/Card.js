class Card {
    constructor(x, y, suite) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.rows = 4;
        this.cols = 3;
        this.suite = suite; // Store the suite of the card
        // this.char = char; // Store the character associated with the suite
        this.flipped = false;
        this.checked = false;
    }
    // display() draws our card onto the canvas
    display() {
        push();
        if (this.flipped) {
            fill(255); // Black if flipped
        } else {
            fill(0); // White if not flipped
        } noStroke();
        // rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);

        // Display the suite text in the center of the card
        textFont(cardFont);
        textSize(20);
        textStyle(NORMAL);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.suite, this.x + this.w / 2, this.y + this.h / 2);
        pop();

    }

    cardFlip() {
        this.flipped = !this.flipped;
        // console.log("Card flipped:", this.flipped);
    }

    mousePressed() {

        // Loop through all the cards and check if the mouse is over each card
        let card = this;
        if (
            mouseX > card.x &&
            mouseX < card.x + card.w &&
            mouseY > card.y &&
            mouseY < card.y + card.h
        ) {
            // console.log("Mouse pressed on card:", card);

            // Toggle the pressed state of the card
            if (!card.flipped) {
                card.cardFlip();
            }
        }
    }
}
