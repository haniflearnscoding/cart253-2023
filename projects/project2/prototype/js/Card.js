class Card {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.suites = [`Cloud`, `Mushroom`, `Fire`, `Flower`, `Star`];
    }
    // display() draws our card onto the canvas
 display(){
        push();
        fill(255,255,255);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
}
