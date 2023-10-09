/**
 * Gardening Simulator
 * Hanif Hashim
 * 
 *Gardening simulator using js p5 library

 */

"use strict";

// objects for all plants in garden
let eggplant = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};

let lemon = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let mushroom = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let potato = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let tangerine = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let tomato = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};
let watermelon = {
    x: 100,
    y: 100,
    size: 100,
    image: undefined
};

/**
 * loading all garden plants
*/
function preload() {
    eggplant.image = loadImage('assets/images/');
    lemon.image = loadImage('assets/images/');
    mushroom.image = loadImage('assets/images/');
    potato.image = loadImage('assets/images/');
    tangerine.image = loadImage('assets/images/');
    tomato.image = loadImage('assets/images/');
    watermelon.image = loadImage('assets/images/');
}


/**
 * Description of setup
*/
function setup() {

}


/**
 * Description of draw()
*/
function draw() {

}