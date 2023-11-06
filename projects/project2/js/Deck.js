class Deck {
    constructor(){
        this.x = x;
        this.y = y;
        this.suites = [`Cloud`, `Mushroom`, `Fire`, `Flower`, `Star`];
    }
}

// display() draws our card onto the canvas
function display(){
    push();
    fill(255,255,255);
    noStroke();
    rect(30, 20, 55, 55);
    pop();
}