/**
 * Musical Toy
 * Hanif Hashim
 * 
 * A program that plays music based on primitive physics.
 */

"use strict";

let balls = [];

// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bf4`, `C4`, `Db4`, `Eb4`, `F4`];

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);

    userStartAudio();

}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.move();
        ball.bounce();
        ball.display();
    }
}

function mousePressed() {
    createBall(mouseX, mouseY);
}

function createBall(x, y) {
    let note = random(notes);
    let ball = new Ball(x, y, note);
    balls.push(ball);
}