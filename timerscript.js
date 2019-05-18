var DayX = new Date(2019,7,15,15,0,0,0);
var Days = DayX.getDay() + (DayX.getMonth() - new Date().getMonth())*28;
var Hours = DayX.getHours() - new Date().getHours();
var Minutes = DayX.getMinutes() - new Date().getMinutes();
if (Hours < 0) {
	Hours = 24 - Hours;
}
if (Hours > 24) {
	Hours = Hours - 24
}
if (Minutes < 0) {
	Minutes = 60 - Minutes;
}
if (Minutes > 60) {
	Minutes = Minutes - 60;
}
document.getElementById("timer").innerHTML=Days + " дней, " + Hours + " часов, " + Minutes + " минут.";