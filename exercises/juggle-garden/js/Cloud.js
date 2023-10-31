class Cloud{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        push();
        // Set the fill color for the cloud (light gray)
        fill(240);
        noStroke();

        // Create ellipses to form the cloud
        ellipse(this.x, this.y, 50, 50);
        ellipse(this.x + 30, this.y, 60, 60);
        ellipse(this.x + 60, this.y, 50, 50);
        ellipse(this.x + 40, this.y - 20, 50, 50);
        ellipse(this.x + 20, this.y - 20, 40, 40);
        pop();
    }
}