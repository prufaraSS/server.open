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

x = -3;

var img = Math.floor((Math.random()*6)+1);
var v = 0.5;

var img1 = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var img5 = new Image();
var img6 = new Image();
var blank = new Image();

img1.src = "img1.jpg";
img2.src = "img5.jpg";
img3.src = "img3.jpg";
img4.src = "img4.jpg";
img5.src = "img2.jpg";
img6.src = "img6.jpg";
blank.src = "blank.png";

var imgs=[img1,img2,img3,img4,img5,img6];

var cv = document.getElementById('anim-bg');
var ctx = cv.getContext("2d");

function draw() {
	ctx.drawImage(blank,0,0);
	cv.style.opacity = v;
	ctx.drawImage(imgs[img-1],x,0);
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
	Days = Days + 365;
}
if (ZSeconds < 0) {
	ZMinutes = ZMinutes - 1;
	ZSeconds = ZSeconds + 60;
}
if (ZMinutes < 0) {
	ZMinutes = ZMinutes + 60;
	ZHours = ZHours - 1;
}
if (ZMinutes > 60) {
	ZMinutes = ZMinutes - 60;
	ZHours = ZHours + 1;
}
if (ZHours < 0) {
	ZHours = ZHours + 24;
	ZDays = ZDays - 1;
}
if (ZHours > 24) {
	ZHours = ZHours - 24;
	ZDays = ZDays + 1;
}
if (ZDays <0) {
	ZDays = ZDays + 365;
	ZYears = ZYears - 1;
}

if (Years > 0) {
	document.getElementById("timer").innerHTML=Years + " лет " + Days + " дней, " + Hours + " часов, " + Minutes + " минут, " + Seconds + " секунд.";
}
else {
	document.getElementById("timer").innerHTML=Days + " дней, " + Hours + " часов, " + Minutes + " минут, " + Seconds + " секунд.";
}
if (ZYears > 0) {
	document.getElementById("timerclose").innerHTML=ZYears + "г " + ZDays + "д " + ZHours + "ч " + ZMinutes + "м " + ZSeconds + "с";
}
else {
	document.getElementById("timerclose").innerHTML=ZDays + "д " + ZHours + "ч " + ZMinutes + "м " + ZSeconds + "с";
}
setInterval(secondss,1000);
setInterval(moveImage,500);
setInterval(fade,20000);
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
	if (ZSeconds > 59) {
		ZMinutes = ZMinutes + 1
		ZSeconds = ZSeconds - 60
	}
	if (ZMinutes < 0) {
		ZMinutes = ZMinutes + 60;
		ZHours = ZHours - 1;
	}
	if (ZMinutes > 60) {
		ZMinutes = ZMinutes - 60;
		ZHours = ZHours + 1;
	}
	if (ZHours < 0) {
		ZHours = ZHours + 24;
		ZDays = ZDays - 1;
	}
	if (ZHours > 24) {
		ZHours = ZHours - 24
		ZDays = ZDays + 1
	}
	if (Years > 0) {
		document.getElementById("timer").innerHTML=Years + " лет, " + Days + " дней, " + Hours + " часов, " + Minutes + " минут, " + Seconds + " секунд.";
	}
	else {
		document.getElementById("timer").innerHTML=Days + " дней, " + Hours + " часов, " + Minutes + " минут, " + Seconds + " секунд.";
	}
	if (ZYears > 0) {
		document.getElementById("timerclose").innerHTML=ZYears + "г " + ZDays + "д " + ZHours + "ч " + ZMinutes + "м " + ZSeconds + "с";
	}
	else {
		document.getElementById("timerclose").innerHTML=ZDays + "д " + ZHours + "ч " + ZMinutes + "м " + ZSeconds + "с";
	}
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
	fadein();
	v = 0.0;
	x = 0
	if (img > 6) {
		img = 1;
	}
}
function moveImage() {
	x = x+1;
}
