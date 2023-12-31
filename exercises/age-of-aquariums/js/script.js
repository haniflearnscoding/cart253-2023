/**
 * E4: Age of Aquariums
 * Hanif Hashim
 * 
 *
 */

"use strict";

let school = []; // Create an empty array and assign it to the school variable

//school variables
let schoolSize = 1; 
let schoolSpeed = 2;

// user js object
let user = {
    x: 300,
    y: 300,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
}

// title, simulation, firstEnding, secondEnding
let state = `title`; 

// canvas and create fish in array
function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}


// creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
    let fish = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: schoolSpeed,
      r: random(40, 255),
      g: random(40, 255),
      b: random(40, 255)
      
      
    };
    return fish;
}

// bg and different states
function draw() {
    background(0);
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {  
        simulation();
    }
    else if (state === `firstEnding`) {  
        firstEnding();
    }
    else if (state === `secondEnding`) {  
        secondEnding();
    }

    
}

// title screen
function title() { 
    push();

    //set the bg img black
    background(0);

    //text settings 
    fill(255);
    textAlign(CENTER);

    //text content & placement
    textSize(40);
    text(`CATCH THE FISHIES`, width / 2, height / 2);
    textSize(22);
    text(`WASD to move`, width / 2, height / 1.5);
    text(`Click to spawn fishies`, width / 2, height / 1.35);
    pop();
}

// first end screen
function firstEnding() { 
    push();
    //set the bg img white
    background(0);

    //text settings 
    fill(255);
    textAlign(CENTER);

    //text content & placement
    textSize(30);
    text(`Too many fish in the tank! Slow Down`, width / 2, height / 2);
    pop();
}

// second end screen
function secondEnding() { 
    push();
    //set the bg img black
    background(0);

    //text settings 
    fill(255);
    textAlign(CENTER);

    //text content & placement
    textSize(40);
    text(`All the food for today`, width / 2, height / 2);
    pop();
}

// calling different functions for simulation
function simulation() { 
    for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
    }
    displayUser();
    movement();
    checkOverlap();
}

// chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
    // choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
    // move fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
    // constrain fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

// displays the provided fish on the canvas
function displayFish(fish) {
    push();
    fill(fish.r, fish.g, fish.b);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

// start simulation
function mousePressed() {
    // if mouse is pressed, trigger simulation
    if (state ===  `title`) { 
        state = `simulation`;
    }
    // create a fish at the mouse position
    let fish = createFish(mouseX,mouseY); 

    // add the fish to our array
    school.push(fish); 

    // call to ending function
    checkEnding();
    
}


//fill and draw user
function displayUser() {
    fill(255);
    noStroke();
    ellipse(user.x, user.y, user.size);
}

// user movement direction
function movement() { 
    //key arrows
    //left
    if (keyIsDown(65)) {
        user.x = user.x - 5;
    }
    //right
    else if (keyIsDown(68)) {
        user.x = user.x + 5;
    }
    //
    else if (keyIsDown(87)) {
        user.y = user.y - 5;
    }
    //down
    else if (keyIsDown(83)) {
        user.y = user.y + 5;
    }

    //constrain user to canvas
    user.x = constrain(user.x, 0, width);
    user.y = constrain(user.y, 0, height);
}

// user and fish overlap function
function checkOverlap() { 
    for (let i = 0; i < school.length; i++) {

        //distance between user and fish
        let d = dist(user.x, user.y, school[i].x, school[i].y)

        //if distance is less than radius of bee & plant, they overlap
        if (d < user.size / 2 + school[i].size / 2) {
            school.splice(i, 1);
            schoolSpeed += 2;
            for (let i = 0; i < school.length; i++){
                school[i].speed = schoolSpeed;
            }
        }
    }
}

// trigger ending states function
function checkEnding() { 
    // if too many fishes
    if (school.length >= 15) {
        state = `firstEnding`;
    }
    // once done eatin
    if (schoolSpeed >= 4){
        state = `secondEnding`;
    }
}