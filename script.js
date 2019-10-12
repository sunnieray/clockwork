var studytime = 12;
var codingtime = 6;
var naptime = 3;
var noon = 12;

//getting it to show current time on webpage
var showCurrentTime = function () 
{

//displays clock on webpage
var clock = document.getElementById('clock');
 
var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";

//set hours
if (hours >= noon) 
{
    meridian = "PM";
}
if (hours > noon) 
{
    hours = hours - 12;
}

if (hours < 10) 
{
    hours = '0' + hours;
}

//set minutes

if (minutes < 10) {
    minutes = "0" + minutes;

//set seconds
}
if (seconds < 10) {
    seconds = "0" + seconds;

}
//put together the string that displays the time
var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHrzXtHe-mxt3Sq6pH2NKwoPaC0m9cM1ae4pknrcErugW8fyS";

  var timeEventJS = document.getElementById("timeEvent");
  var clockImage = document.getElementById("clockImage");
  
  if (time == studytime)
  {
    image = "https://images3.memedroid.com/images/UPLOADED538/5be88fed751a2.jpeg";
    messageText = "Let's Study!";
  }
  else if (time == codingtime)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesE8eekMNuDoQNCy3TE1qGvz80grUmoEHFGaekyc1TDKjDk3k";
    messageText = "Let's Code!";
  }
  else if (time == naptime)
  {
    image = "https://i0.wp.com/asc-mbs.com/wp-content/uploads/2017/03/Nap-Time-l.jpg?ssl=1";
    messageText = "Sleep tight!";
  }
  else {
      image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHrzXtHe-mxt3Sq6pH2NKwoPaC0m9cM1ae4pknrcErugW8fyS"
      messageText = "Just Relax";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  clockImage.src = image;
  
  showCurrentTime();
};
updateClock();

//update per second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Activates coding selector
var codingTimeSelector =  document.getElementById("codingTimeSelector");

var codingEvent = function()
{
    codingtime = codingTimeSelector.value;
};

codingTimeSelector.addEventListener("change", codingEvent);


// Activates study selector
var studyTimeSelector =  document.getElementById("studyTimeSelector");

var studyEvent = function()
{
    studytime = studyTimeSelector.value;
};

studyTimeSelector.addEventListener("change", studyEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

