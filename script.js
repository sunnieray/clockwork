var studytime = 12;
var codingtime = 6;
var naptime = 3;
var noon = 12;
var partytime;

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

  if (time == partytime)
  {
    image = "https://cdn.webshopapp.com/shops/117600/files/188080037/studio-stationery-gold-foil-poster-work-work-work.jpg";
    messageText = "Let's put in work!";
  }

  else if (time == studytime)
  {
    image = "http://static1.squarespace.com/static/5b0b86c39772ae8185d6f50c/5b274998352f53967a795eaf/5b7de7bb4d7a9ca6d5a6bc1d/1535434800703/Screen+Shot+2018-08-22+at+4.18.10+PM+copy.png?format=1500w";
    messageText = "Let's Study!";
  }
  else if (time == codingtime)
  {
    image = "https://www.computing.co.uk/w-images/356457d6-48c3-47c8-a5aa-eec0cbb45cc7/0/computercode-580x358.jpeg";
    messageText = "Let's Code!";
  }
  else if (time == naptime)
  {
    image = "https://i.pinimg.com/736x/dc/c8/6a/dcc86a8b0828e6ea4356b3ab258639b4.jpg";
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

//party button to work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Done Working!";
        //partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Lets work!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


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

