var cv = document.getElementById('canvas');
var ctx = cv.getContext("2d");

var field = new Image();
var snake = new Image();
var item = new Image();

var snakke = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

var x = 0;
var y = 0;

var moving = "right";
var lastmove = "";
var score = 0;
var state = "game";

var itemx = 3;
var itemy = 3;

var time = new Date().getSeconds();
var word = ["_","_","_","_","_","_","_","_","_","_","_"];
var openedword = "Когдасервер";
var opened = [];



field.src = "game/field.png";
item.src = "game/item.png";
snake.src = "game/snake.png";


document.onkeypress = function(event) {
	if (event.key == "s" && lastmove != "up" || event.key == "ы" && lastmove != "up") {
		moving = "down";
	}else{
	if (event.key == "d" && lastmove != "left" || event.key == "в" && lastmove != "left") {
		moving = "right";
	}else{
	if (event.key == "w" && lastmove != "down" || event.key == "ц" && lastmove != "down") {
		moving = "up";
	}else{
	if (event.key == "a" && lastmove != "right" || event.key == "ф" && lastmove != "right") {
		moving = "left";
	}
	}
	}
	}
}

function draw() {
	ctx.drawImage(field,0,0);
	for (i=0;i<snakke.length;i++) {
		ctx.drawImage(snake,snakke[i][0]*16,snakke[i][1]*16)
	}
	ctx.drawImage(item,1+itemx*16,1+itemy*16)
	requestAnimationFrame(draw);
}

function move() {
	if (state == "game") {
		if (moving == "right") {
			x = x + 1;
			lastmove = "right";
		}else{
		if (moving == "down") {
			y = y + 1;
			lastmove = "down";
		}else{
		if (moving == "left") {
			x = x - 1;
			lastmove = "left";
		}else{
		if (moving == "up") {
			y = y - 1;
			lastmove = "up";
		}
		}
		}
		}
		snakke.push([x,y]);
	}
	if (x == itemx && y == itemy) {
		score = score + 50;
		while (itemx == x || itemy == y) {
			itemx = Math.floor(Math.random()*16);
			itemy = Math.floor(Math.random()*16);
		}
	}else{snakke.shift();}
	for(i=0;i<snakke.length;i++) {
		while (itemx == snakke[i][0] && itemy == snakke[i][1]) {
			itemx = Math.floor(Math.random()*16);
			itemy = Math.floor(Math.random()*16);
		}
	}
	for (i=0;i<snakke.length-1;i++) {
		if (x == snakke[i][0] && y == snakke[i][1]) {
			state = "dead";
		}
	}
	if (x < 0) {
		state = "dead";
	}else{
	if (x > 15) {
		state = "dead";
	}else{
	if (y < 0) {
		state = "dead";
	}else{
	if (y > 15) {
		state = "dead";
	}
	}
	}
	}
	if (state == "game") {
		document.getElementById('score').innerHTML = 'Score: ' + score;
	}else{
	if (state == "dead") {
		document.getElementById('score').innerHTML = 'Game over!\nScore: ' + score;
	}
	}
	if (score <= 1100){
		setTimeout(move,60000/(score+100)/1.4);
	}else{
	if (score > 1000) {
		setTimeout(move,5)
	}
	}
	for (i=1;i<12;i++) {
		if (score == i*100) {
			if (opened.length == i-1) {
				opened[i-1] = Math.floor(Math.random()*10);
				for (p=0;p<word.length;p++) {
					if (word[p] != "_") {
						if (p == opened[i-1]) {
							for (l=0;l<word.length;l++) {
								if(word[l] == "_"){
									opened[i-1] = l;
									break;
								}
							}
						}
					}
				}
				word[opened[i-1]] = openedword[opened[i-1]];
			}
		}
	}
	var str = "";
	for (i=0;i<12;i++) {
		var check = false;
		for (p=0;p<opened.length;p++) {
			if (opened[p] == i) {
				str = str + openedword[i];
				check = true;
			}
		}
		if (i==4) {
			str = str + " ";
		}
		if (check == false && i != 11) {
			str = str + "_";
		}
	}
	document.getElementById('word').innerHTML = str;
}

function timer(){
	var d1 = new Date().getFullYear();
	var d2 = new Date().getMonth();
	var d3 = new Date().getDate();
	var d10 = new Date().getSeconds();
	var d4 = (2022-d1)*31536000;
	var d5 = (10*31+10-d2*31-d3);
	var d6 = d4+d5*86400;
	var d7 = d5+d6;
	var d8 = d7 - d10;
	time = d8
	document.getElementById('timer').innerHTML = time + " секунд";
}
setTimeout(move,1000);
setInterval(timer,1000);

snake.onload = draw;