var DayX = new Date(2022,10,10,0,40,0,0);
var Years = DayX.getFullYear() - new Date().getFullYear()
var Days = DayX.getDay() + (DayX.getMonth() - new Date().getMonth())*28;
var Hours = DayX.getHours() - new Date().getHours();
var Minutes = DayX.getMinutes() - new Date().getMinutes();
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
document.getElementById("timer").innerHTML=Years + " лет " + Days + " дней, " + Hours + " часов, " + Minutes + " минут.";