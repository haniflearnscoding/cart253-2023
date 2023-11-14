class Card {
    constructor(x, y, note) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70;
        this.vx = 0;
        this.vy = 0;
        this.suites = [`Cloud`, `Mushroom`, `Fire`, `Flower`, `Star`];
        this.state = `happy`;
        this.scaredThreshold = 0.1;
        this.happySpeed = 1;
        this.scaredSpeed = -25;


        //Synth
        this.note = note;
        this.synth = new p5.PolySynth();
    }
    // display() draws our card onto the canvas
    display() {
        push();
        fill(255, 255, 255);
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        // Play the note when the card is displayed
        this.playNote();
        pop();

    }
    playNote() {
        // let envelope = {
        //     attack: 0.1,
        //     decay: 0.1,
        //     sustain: 0.5,
        //     release: 0.5
        // };

        this.synth.play(this.note, 0.05, 0, 0.1);
    }
    clap() {
        // Get the current level of sound going into the microphone
        let level = mic.getLevel();
        console.log(level);

        // Check if the card gets scared

        if (level > this.scaredThreshold) {

            this.state = `afraid`;
            // The ghost should run away to the right
            this.vy = this.scaredSpeed;
        }

        // Move the ghost
        this.x += this.vx;
        this.y += this.vy;
    }
}
