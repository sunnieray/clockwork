
var clockSpace = document.getElementById('clock');

//clock logic

var updateTime = function () {

var clockTime = new Date();
var hours = clockTime.getHours();
var minutes = clockTime.getMinutes();
var seconds = clockTime.getSeconds ();
var meridian = 'AM';

if (hours > 11) {
    meridian = 'PM';
}
if (hours > 12) {
    hours = hours - 12;

}

if (hours < 10) {
    hours = '0' + hours;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds;
}
//display time
clockSpace.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridian;
};
//update per second

var oneSecond = 1000;
setInterval(updateTime, oneSecond);