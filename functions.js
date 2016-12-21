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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var flourSack = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    width: 100,
    height: 200,
    state: "idle",
    leftEyeX: 25,
    leftEyeY: 50,
    leftEyeR: 25,
    rightEyeX: 75,
    rightEyeY: 50,
    rightEyeR: 25,
    bellyX: 50,
    bellyY: 125,
    bellyR: 50
}
var mouseHeld = false;
document.addEventListener("mousedown", function (e) {
    if (e.x > flourSack.x && e.x < flourSack.x + flourSack.width && e.y > flourSack.y && e.y < flourSack.y + flourSack.height) {
        mouseHeld = true;
        if (Math.pow(e.x - (flourSack.x + flourSack.leftEyeX), 2) + Math.pow(e.y - (flourSack.y + flourSack.leftEyeY), 2) < Math.pow(flourSack.leftEyeR, 2)) {
            console.log("left eye clicked");
        }
        if (Math.pow(e.x - (flourSack.x + flourSack.rightEyeX), 2) + Math.pow(e.y - (flourSack.y + flourSack.rightEyeY), 2) < Math.pow(flourSack.rightEyeR, 2)) {
            console.log("right eye clicked");
        }
        if (Math.pow(e.x - (flourSack.x + flourSack.bellyX), 2) + Math.pow(e.y - (flourSack.y + flourSack.bellyY), 2) < Math.pow(flourSack.bellyR, 2)) {
            console.log("belly clicked");
        }
    }
});
document.addEventListener("mousemove", function (e) {
    if (mouseHeld == true) {
        flourSack.state = "flying";
        flourSack.x = e.x;
        flourSack.y = e.y;
    }
});
document.addEventListener("mouseup", function (e) {
    mouseHeld = false;
    if (flourSack.state == "flying") {
        flourSack.state = "falling";
    }
});

function draw() {
    if (flourSack.state == "falling") {
        flourSack.y += 10;
        if (flourSack.y >= window.innerHeight / 2) {
            flourSack.state = "idle";
        }
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff6432";
    ctx.fillRect(flourSack.x, flourSack.y, flourSack.width, flourSack.height);
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(flourSack.x + flourSack.leftEyeX, flourSack.y + flourSack.leftEyeY, flourSack.leftEyeR, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(flourSack.x + flourSack.rightEyeX, flourSack.y + flourSack.rightEyeY, flourSack.rightEyeR, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(flourSack.x + flourSack.bellyX, flourSack.y + flourSack.bellyY, flourSack.bellyR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#000";
    ctx.fillText(flourSack.state, flourSack.x, flourSack.y);
    requestAnimationFrame(draw);
}
draw();