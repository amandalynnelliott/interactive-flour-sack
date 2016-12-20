/*

TODO

FLOUR SACK STATES
depressed, belly tickle, eye poke, drag up, drag right or left (?), falling, excited hello, ducks, kicks ball

? Place img holder (only one image div with src that changes) in <canvas> drawImage and getImageData to not allow clicks on alpha 0 pixels

EVENTS - FOR EACH, CHANGE IMG & ANIM NAME
--- can't click on transparent pixel
--- click event - belly location
--- click event - eye location
--- click and drag - draggable: true, or .ondrag - define ground area, dx, dy, weight
------ let go, fall
--- ? hover - eyes follow mouse - UNIT CIRCLE

BUTTONS, ALSO CHANGE IMG & ANIM NAME
--- timer display that makes animation "depressed" loop if runs out
--- say hello (excited)
--- throw ball (ducks)
--- toss ball (kicks)

UI - "Click on the flour sack!"
Background horizon line image/ scene
Animate and exchange placeholder images for GIFs, making sure that connection frames are the same. 
--- might need to make some transition GIFs, ie: depressed to neutral

*/

// 1. TEST: Get a GIF to play in the canvas
// 2. Get bird GIF to move around, accept user input 
// 3. Depending on the user input, click or drag, change GIF.


var states = [tickle, pokeRight, pokeLeft, dragUp, fall];
function changeGIF(event, state) {
	
	// then once state GIF plays once, default to neutral GIF looped infinitely
}


// click belly, rightEye, or leftEye
	// heatmap certain location of img .onclick changeGIF();
var locations = [belly, rightEye, leftEye];
function click(location) {
	
}


// click and drag up, unclick, fall.  