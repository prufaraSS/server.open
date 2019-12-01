var DayX = new Date(2021,7,1,0,0,0,0);
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
	Years = Years + 1;
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
	document.getElementById("timerclose").innerHTML=ZYears + " год " + ZDays + " дней, " + ZHours + " часов, " + ZMinutes + " минут, " + ZSeconds + " секунд.";
}
else {
	document.getElementById("timerclose").innerHTML=ZDays + " дней, " + ZHours + " часов, " + ZMinutes + " минут, " + ZSeconds + " секунд.";
}
setInterval(secondss,1000);
setInterval(moveImage,600);
setInterval(changeImage,3000);
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
		document.getElementById("timerclose").innerHTML=ZYears + " год " + ZDays + " дней, " + ZHours + " часов, " + ZMinutes + " минут, " + ZSeconds + " секунд.";
	}
	else {
		document.getElementById("timerclose").innerHTML=ZDays + " дней, " + ZHours + " часов, " + ZMinutes + " минут, " + ZSeconds + " секунд.";
	}
}
function changeImage() {
	document.getElementById("image")
}
