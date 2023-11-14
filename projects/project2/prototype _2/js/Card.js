class Card {
    constructor(x, y, suite) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.suite = suite;
    }
    // display() draws our card onto the canvas
    display() {
        push();
        fill(255, 255, 255);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        pop();

        // Display the suite text in the center of the card
        textSize(10);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.suite, this.x + this.w / 2, this.y + this.h / 2);

    }
}
