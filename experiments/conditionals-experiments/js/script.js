
"use strict";
let caterPillar = {
    x: 100,
    y: 250,
    segmentSize: 50
}



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
    background(0);
    noStroke();
    fill(100,200,100);
   
    // let x = caterPillar.x;
    // let numSegments = 5;
    // let segmentsDrawn = 0;

    // while (segmentsDrawn < numSegments) { 
    //     ellipse(x,caterPillar.y,caterPillar.segmentSize);
    //     x += 40;
        
    //     segmentsDrawn++;
    // }
    
    let x = caterPillar.x;
    let numSegments = 10;

    for (let i = 0; i < numSegments; i++) { 
        ellipse(x, caterPillar.y, caterPillar.segmentSize);
        x += 40;
    }
    
    
}