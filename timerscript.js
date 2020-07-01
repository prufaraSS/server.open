var DayX = new Date(2020,6,1,0,0,0,0);
//var DayX = new Date(2019,7,5,12,0,0,0);

var Years = DayX.getFullYear() - new Date().getFullYear()
var Days = DayX.getMonth() * 31 + DayX.getDate() - new Date().getMonth() * 31 - new Date().getDate();
var Hours = DayX.getHours() - new Date().getHours();
var Minutes = DayX.getMinutes() - new Date().getMinutes();
var Seconds = DayX.getSeconds() - new Date().getSeconds();
var DayZ = new Date(2018,8,5,12,39,45,0);
var ZYears = new Date().getFullYear() - DayZ.getFullYear();
var ZDays = new Date().getMonth() * 29 + new Date().getDate() - DayZ.getMonth() * 29 + DayZ.getDate();
var ZHours = new Date().getHours() - DayZ.getHours();
var ZMinutes = new Date().getMinutes() - DayZ.getMinutes();
var ZSeconds = new Date().getSeconds() - DayZ.getSeconds();

state = -1;
x = -3;
zoom1 = 1;
zoom2 = 1;
visible = 0;

var img = Math.floor((Math.random()*6)+1);
var chr = Math.floor((Math.random()*10));
var v = 0.5;

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var blank = new Image();
var preludeimg = new Image();
var spar = new Image();
var garrymod = new Image();
var sbox = new Image();



img1.src = "img1.jpg";
img2.src = "img5.jpg";
img3.src = "img3.jpg";
img4.src = "img4.jpg";
img5.src = "img2.jpg";
img6.src = "img6.jpg";
blank.src = "blank.png";
preludeimg.src = "black.png";
spar.src = "spar.png";
garrymod.src = "garrymod.png";
sbox.src = "sbox.png";

var predator = new Image();
var spar4ik = new Image();
var maksik = new Image();
var prizrak = new Image();
var pruf = new Image();
var shaolesh = new Image();
var shitok = new Image();
var lxrd = new Image();
var kotoninja = new Image();
var bogdanwoop = new Image();
predator.src = "ch_predator.png";
spar4ik.src = "ch_spar.png";
predator.src = "ch_predator.png";
maksik.src = "ch_maksik.png";
prizrak.src = "ch_prizrak.png";
pruf.src = "ch_pruf.png";
shaolesh.src = "ch_shaolesh.png";
shitok.src = "ch_shitok.png";
lxrd.src = "ch_lxrd.png";
kotoninja.src = "ch_kotoninja.png";
bogdanwoop.src = "ch_bogdanwoop.png";

var characters=[predator,spar4ik,shitok,lxrd,kotoninja,pruf,bogdanwoop,maksik,prizrak,shaolesh];
var prevchar = -1;

var imgs=[img1,img2,img3,img4,img5,img6];


var cv = document.getElementById('anim-bg');
var preludins = document.getElementById('preludins');
var chars = document.getElementById('character');
var ctx = cv.getContext("2d");
var plx = preludins.getContext("2d");
var chx = chars.getContext("2d");

function draw() {
	ctx.clearRect(0,0,cv.width,cv.height);
	ctx.drawImage(imgs[img-1],0,0);
	chx.clearRect(0,0,chars.width,chars.height);
	chx.drawImage(characters[chr],0,0);
	cv.style.left = -50+x;
	chars.style.left = x*2;
	color = "rgba(0,0,0,"+(1.0-v)+")"
	ctx.fillStyle = color;
	chars.style.opacity = v*2;
	ctx.fillRect(0, 0, cv.width, cv.height);
	plx.clearRect(0, 0, preludins.width, preludins.height);
	
	preludins.style.opacity = visible;
	if(state == 1) {
		plx.drawImage(spar,980-(343*zoom1),490-(150*zoom1),687*zoom1,300*zoom1);
		if (visible < 1) {
			visible = visible + 0.02;
		}
		if (zoom1 < 1.5) {
			zoom1 = zoom1 + 0.001;
		}
	}
	if(state == 2) {
		plx.drawImage(spar,980-(343*zoom1),490-(150*zoom1),687*zoom1,300*zoom1);
		if (visible > 0) {
			visible = visible - 0.02;
		}
		if (zoom1 < 1.5) {
			zoom1 = zoom1 + 0.001;
		}
		if (visible <= 0) {
			state = 3;
			zoom1 = 1.0;
		}
	}
	if (state == 3) {
		plx.drawImage(garrymod,980-(150*zoom1),490-(150*zoom1),300*zoom1,300*zoom1);
		if (visible < 1) {
			visible = visible + 0.02;
		}
		if (zoom1 < 1.5) {
			zoom1 = zoom1 + 0.001;
		}
	}
	if (state == 4) {
		plx.drawImage(garrymod,980-(150*zoom1),490-(150*zoom1),300*zoom1,300*zoom1);
		if (visible > 0) {
			visible = visible - 0.02;
		}
		if (zoom1 < 1.5) {
			zoom1 = zoom1 + 0.001;
		}
	}
	if (state == 5) {
		plx.drawImage(sbox,980-324,490-150);
		if (visible < 1) {
			visible = visible + 0.01;
		}
	}
	if (state == 6) {
		plx.drawImage(sbox,980-324,490-150);
		if (visible > 0) {
			visible = visible - 0.02;
		}
		if (visible <= 0) {
			state = -1;
			setTimeout(event6,500);
		}
	}
	if (state == 7) {
		document.getElementById("bg-preludins").style.opacity = visible;
		document.getElementById("music2").play();
		if (visible > 0) {
			visible = visible - 0.02;
		}
		if (visible <= 0) {
			state = -1
			fadein();
			document.getElementById("bg-preludins").parentNode.removeChild(document.getElementById("bg-preludins"));
			document.getElementById("preludins").parentNode.removeChild(document.getElementById("preludins"));
		}
	}
	requestAnimationFrame(draw);
}

img1.onload = draw;

if (Seconds < 0) {
	Minutes = Minutes - 1
	Seconds = Seconds + 60
}
if (Minutes < 0) {
	Minutes = Minutes + 60;
	Hours = Hours - 1;
}
if (Minutes > 60) {
	Minutes = Minutes - 60;
	Hours = Hours + 1;
}
if (Hours < 0) {
	Hours = Hours + 24;
	Days = Days - 1;
}
if (Hours > 24) {
	Hours = Hours - 24;
	Days = Days + 1;
}
if (Days < 0) {
	Years = Years - 1;
	#Days = Days + 365;
}

if (Years > 0) {
	document.getElementById("timer").innerHTML=Years + "  " + Days + "  " + Hours + "  " + Minutes + "  " + Seconds;
}
else {
	if (Days >= 10){
		document.getElementById("days").innerHTML=Days;
	} else {
		document.getElementById("days").innerHTML="0"+Days;
	}
	if (Hours >= 10) {
		document.getElementById("hours").innerHTML=Hours;
	} else {
		document.getElementById("hours").innerHTML="0"+Hours;
	}
	if (Minutes >= 10) {
		document.getElementById("minutes").innerHTML=Minutes;
	} else {
		document.getElementById("minutes").innerHTML="0"+Minutes;
	}
	if (Seconds >= 10) {
		document.getElementById("seconds").innerHTML=Seconds;
	} else {
		document.getElementById("seconds").innerHTML="0"+Seconds;
	}
}
setInterval(secondss,1000);
function secondss() {
	Seconds = Seconds - 1;
	ZSeconds = ZSeconds + 1;
	if (Seconds < 0) {
		Minutes = Minutes - 1
		Seconds = Seconds + 60
	} else if (Seconds > 60) {
		Minutes = Minutes + 1
		Seconds = Seconds - 60
	}
	if (Minutes < 0) {
		Minutes = Minutes + 60;
		Hours = Hours - 1;
	}
	if (Minutes > 60) {
		Minutes = Minutes - 60;
		Hours = Hours + 1;
	}
	if (Hours < 0) {
		Hours = Hours + 24;
		Days = Days - 1;
	}
	if (Hours > 24) {
		Hours = Hours - 24
		Days = Days + 1
	}
	if (Years > 0) {
		document.getElementById("timer").innerHTML=Years + " " + Days + " " + Hours + " " + Minutes + " " + Seconds;
	}
	else {
		if (Days >= 10){
			document.getElementById("days").innerHTML=Days;
		} else {
			document.getElementById("days").innerHTML="0"+Days;
		}
		if (Hours >= 10) {
			document.getElementById("hours").innerHTML=Hours;
		} else {
			document.getElementById("hours").innerHTML="0"+Hours;
		}
		if (Minutes >= 10) {
			document.getElementById("minutes").innerHTML=Minutes;
		} else {
			document.getElementById("minutes").innerHTML="0"+Minutes;
		}
		if (Seconds >= 10) {
			document.getElementById("seconds").innerHTML=Seconds;
		} else {
			document.getElementById("seconds").innerHTML="0"+Seconds;
		}
	}
}

addEventListener('click', event1);
window.onload = function() {state = 0; document.getElementById("loadin").parentNode.removeChild(document.getElementById("loadin"));}

function event1() {
	if (state == 0) {
		state = 1;
		document.getElementById("music1").play();
		setTimeout(event2,3000);
	}
}

function event2() {
	state = 2;
	setTimeout(event3,4000);
}

function event3() {
	state = 4;
	setTimeout(event4,1100);
}
function event4() {
	state = 5;
	setTimeout(event5,4500);
}
function event5() {
	state = 6;
}
function event6() {
	state = 7;
	v = 0;
	visible = 1;
	setInterval(moveImage,50);
	setInterval(fade,20000);
}

function fade() {
	if (v > 0) {
		setTimeout(fade,40);
	}
	else {
		changeImage();
	}
	v = v - 0.01;
}

function fadein() {
	if (v < 0.5) {
		setTimeout(fadein,40);
	}
	v = v + 0.01;
}

function changeImage() {
	img = img + 1;
	changecharacter();
	fadein();
	v = 0.0;
	x = 0
	if (img > 6) {
		img = 1;
	}
}
function moveImage() {
	x = x+0.1;
}

function changecharacter() {
	chr = chr + 1;
	if (chr == 10) {
		chr = 0
	}
}
