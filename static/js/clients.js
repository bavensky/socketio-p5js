var socket = io.connect();
var G = {
	spriteAnimation:{
		position : {
		}
	}
}


socket.on('clients', function(data) {
	console.log(data);
	G.spriteAnimation.position.x = data.x;
	G.spriteAnimation.position.y = data.y;
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

	text(`x position = ${G.spriteAnimation.position.x}`, 10, 20)
	text(`y position = ${G.spriteAnimation.position.y}`, 10, 30)

	drawSprites();

}