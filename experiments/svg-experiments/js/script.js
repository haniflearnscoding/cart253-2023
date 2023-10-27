/**
 * SVG Experiment
 * Hanif Hashim
 * 
 * https://www.gorillasun.de/blog/working-with-svgs-in-p5js/
 * 
 */

"use strict";

// create the grid handler
// gridDivsX and gridDivsY are the dimensions of the grid
let G = new makeGrid(gridDivsX, gridDivsY)

// creates the boolean grid
G.setupGrid()

// populates this grid with rectangles
// stored in an array named rectInfo
G.populateGrid()

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(100, 100, SVG);
    background(255);
    fill(150);
    stroke(150);
}


/**
 * Description of draw()
*/
function draw() {
    var r = frameCount % 200 * Math.sqrt(2);
    background(255);
    ellipse(0, 0, r, r);

    for(let n = 0; n < G.rectInfo.length; n++){
        let R = G.rectInfo[n]
      
        // if the rectangle occupies patches that are larger than 1x1
        // we select one of the 2x2 tiles otherwise a 1x1 one
        let randSVG;
        if(r.dimX>1){
          randSvg = random(svgs2)
        }else{
          randSvg = random(svgs)
        }
      
        // Calculate position and correct dimensions
        var x = r.posX * gSX + pad
        var y = r.posY * gSY + pad
        var wid = r.dimX * gSX
        var hei = r.dimY * gSY
      
        // Draw the tile
        buff.image(randSvg, x, y, wid, hei)
      }

   
}