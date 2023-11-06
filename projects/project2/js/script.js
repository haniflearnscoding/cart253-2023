/**
 * Project 2: Table Minigame!
 * Hanif Hashim
 * 
 *Table minigame inspired by Super Mario Bros. DS, using js p5 library
 */

"use strict";

// Our table

let table = {
    // An array to store the individual flowers
    cards: [],
    // How many cards are on the table
    numCards: 3,
     // The color of the table (background)
     tableColor: {
        r: 53, 
        g: 101,
        b: 77
     }
};

let state = `simulation`; // title, simulation, end

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);

}


/**
 * Description of draw()
*/
function draw() {
    // Display the table
    background(table.tableColor.r, table.tableColor.g, table.tableColor.b);

}