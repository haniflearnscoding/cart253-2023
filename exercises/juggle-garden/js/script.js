/**
 * Juggle Garden
 * Hanif Hashim
 * 
 * Continuation of garden simulation using js p5 library
 */

"use strict";

// Our garden
let garden = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the garden
  numFlowers: 10,
  // An array to our the bees
  bees: [],
  // How many bees in the garden
  numBees: 5,
  // An array to store the individual clouds
  clouds: [],
  // How many flowers in the garden
  numClouds: 5,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

let state = `simulation`;

// setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  }

  // Create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bee = new Bee(x, y);
    // Add the bee to the array of bees
    garden.bees.push(bee);
  }

  // Create our clouds by counting up to the number of clouds
  for (let i = 0; i < garden.numClouds; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new cloud using the arguments
    let cloud = new Cloud(x, y);
    // Add the cloud to the array of clouds
    garden.clouds.push(cloud);
  }
  
    

}

// draw()
// Displays our flowers
function draw() { 
    if (state === `simulation`) {
        simulation();
    }
    else if (state === `firstEnding`) {  
        end();
    }
    else if (state === `secondEnding`) {  
        end2();
    }
  

}

function end() { 
  push();
  //set the bg img white
  background(255);

  //text settings 
  textSize(22); 
  fill(0);
  textAlign(CENTER);

  //text content & placement
  text(`The bees have died`, width / 2, height / 2);
  pop();
}

function end2() { 
  push();
  //set the bg img white
  background(255);

  //text settings 
  textSize(22); 
  fill(0);
  textAlign(CENTER);

  //text content & placement
  text(`The flowers have died`, width / 2, height / 2);
  pop();
}

function simulation(){
  // Display the grass
  background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

  displayFlower();
  displayBee();
  displayCloud();
  ending();

}

function displayFlower(){
  // Loop through all the flowers in the array and display them
  for (let i = 0; i < garden.flowers.length; i++) {
    let flower = garden.flowers[i];
    // Check if this flower is alive
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink();
      flower.display();
    }
  }
}

function displayBee(){
  // Loop through all the bees in the array and display them
  for (let i = 0; i < garden.bees.length; i++) {
    let bee = garden.bees[i];
    let userBee = garden.bees[0];
    // Check if this flower is alive
    if (bee.alive) {
      // Shrink and move the bee
      bee.shrink();
      bee.move();

      // NEW! Go through the entire flower array and try to pollinate the flowers!
      // Note that we use j in our for-loop here because we're already inside
      // a for-loop using i!
      for (let j = 0; j < garden.flowers.length; j++) {
        let flower = garden.flowers[j];
        bee.tryToPollinate(flower);
      }

      // Display the bee
      bee.display();
    }

    // user control with mouse coordinates
    userBee.x = mouseX;
    userBee.y = mouseY;
    
    }
}

function displayCloud(){
  // Loop through all the clouds in the array and display them
  for (let i = 0; i < garden.clouds.length; i++) {
    let cloud = garden.clouds[i];
    // console.log(cloud);
    
    // Display the clouds
    cloud.display();
    
}
}

function ending(){
  for (let i = 0; i < garden.bees.length; i++){
    let bee = garden.bees[i];
    if(!bee.alive){
      state = `firstEnding`;
    }
  }
  for (let j = 0; j < garden.flowers.length; j++){
    let flower = garden.flowers[j];
    if(!flower.alive){
      state = `secondEnding`;
    }
  }
}

// function secondEnding(){
//   console.log(`second ending`);
// }