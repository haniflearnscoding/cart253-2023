class Card {
    constructor(x, y, suite) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.suite = suite; // Store the suite of the card
        this.char = char; // Store the character associated with the suite
    }
    // display() draws our card onto the canvas
    display() {
        push();
        fill(255, 255, 255);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        pop();

        // Display the suite text in the center of the card
        textFont(cardFont);
        textSize(20);
        textStyle(NORMAL);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.suite, this.x + this.w / 2, this.y + this.h / 2);

        // Display the custom character in the center of the card
        // text('\u2665', width / 2, height / 2);
        // text(this.char, width / 2, height / 2);

    }
}
