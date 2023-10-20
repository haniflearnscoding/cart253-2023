"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

// foods
let food1;
let food2;
let food3;
let food4;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    food1 = createFood(150,300);
    food2 = createFood(250,300);
    food3 = createFood(350,300);
    food4 = createFood(450,300);

}

function createFood(x,y) {
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false
  };
  return food;
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if (d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Display the food provided as a parameter
function displayFood(food) {
  // Check if the food is still available to be eaten
  if (!food.eaten) {
    // Display the food as its position and with its size
    push();
    fill(255, 100, 100);
    ellipse(food.x, food.y, food.size);
    pop();
  }
}

