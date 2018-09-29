var socket = io.connect();
var G = {
	spriteAnimation:{
		position : {

		}
	}
}

setInterval(function() {
	socket.emit('position', {x: G.spriteAnimation.position.x, y: G.spriteAnimation.position.y});
}, 4);

socket.on('position', function(data) {
	console.log(data);
});

window.addEventListener('deviceorientation', function(event) {
	var {alpha, beta, gamma} = event;
	G.mag = alpha;
	G.y_axis = beta;
	G.x_axis = gamma;
});

function setStatus(text) {
	document.getElementById('status').innerText = text;
}

function setup() {
	createCanvas(350, 300);
	G.spriteAnimation = createSprite(width/2, height/2, 30, 30)
}

function draw() {
	clear();
	background(255)

	text(`mag = ${G.mag}`, 10, 20);
	text(`y = ${G.y_axis}`, 10, 30);
	text(`x = ${G.x_axis}`, 10, 40);
	text(`x position = ${G.spriteAnimation.position.x}`, 10, 70);
	text(`y position = ${G.spriteAnimation.position.y}`, 10, 80);

	if(G.x_axis > 1) {
		G.spriteAnimation.velocity.x = 1;
	} else if(G.x_axis < -1) {
		G.spriteAnimation.velocity.x = -1;
	} else {
		G.spriteAnimation.velocity.x = 0;
	}
	if(G.y_axis > 1) {
		G.spriteAnimation.velocity.y = 1;
	} else if(G.y_axis < -1) {
		G.spriteAnimation.velocity.y = -1;
	} else {
		G.spriteAnimation.velocity.y = 0;
	}

	drawSprites();

}