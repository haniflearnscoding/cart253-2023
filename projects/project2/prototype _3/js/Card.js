class Card {
    constructor(x, y, suite) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.rows = 4;
        this.cols = 3;
        this.suite = suite; // Store the suite of the card
        this.char = char; // Store the character associated with the suite
        this.flipped = true;
    }
    // display() draws our card onto the canvas
    display() {

        // for (let r = 0; r < this.rows; r++) {
            // for (let c = 0; c < this.cols; c++) {
                push();
                if (this.flipped) {
                    fill(255);
                } else {
                    fill(0);
                } noStroke();

                rect((c * this.w) * 1.25, (r * this.h) * 1.25, this.w, this.h);

                // Display the suite text in the center of the card
                textFont(cardFont);
                textSize(20);
                textStyle(NORMAL);
                fill(0);
                textAlign(CENTER, CENTER);
                text(this.suite, this.x + this.w / 2, this.y + this.h / 2);
                pop();
            // }
        // }



    }

    cardFlip() {
        this.flipped = !this.flipped;
        console.log("Card flipped:", this.flipped);
    }
}
