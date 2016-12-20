/*

TODO

FLOUR SACK STATES
depressed, belly tickle, eye poke, drag up, drag right or left (?), falling, excited hello, ducks, kicks ball

? Place img holder (only one image div with src that changes) in <canvas> drawImage and getImageData to not allow clicks on alpha 0 pixels

EVENTS - FOR EACH, CHANGE IMG & ANIM NAME
--- can't click on transparent pixel
--- click event - belly location
--- click event - eye location
--- click and drag - draggable: true, or .ondrag - define ground area, dx, dy, weight, starting position will change
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
// 2. Get bird GIF to move around, accept user input. Bounding box: If x position is past point, stop. 
// 3. Depending on the user input, click or drag, change GIF.
// 4. Make idle state GIF play indefinitely, but GIFs triggered by event only play once. on_end

/*

var flourSack = {
	x:
	y:
	width:
	height:
	state: ["idle", "flying"]
}

onClick(e){
	e has x and y of click
	if its within some predefined rect (e.g. right eye)
	state = right_eye_clicked;
	
	e.x
	e.y
	flourSack.x
	flourSack.y
	flourSack.width
	flourSack.height
}

draw() {
	switch (flourSack.state){
		case "idle":
			draw idle animation gif (flourSack.X, flourSack.Y)
			break;
		case "flying":
			draw flying animation gif (flourSack.X, flourSack.Y)
			break;
	}
}

*/