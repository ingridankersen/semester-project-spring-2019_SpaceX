// COUNTDOWN SCRIPT

var launchDate = new Date("Jun 11, 2019 11:11:11").getTime();

var x = setInterval(function() {

  var todaysDate = new Date().getTime();
    
  var timeLeft = launchDate - todaysDate;
    
  var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    
document.getElementById("countdown-days").innerHTML = daysLeft;
document.getElementById("countdown-hours").innerHTML = hoursLeft;
document.getElementById("countdown-minutes").innerHTML = minutesLeft; 
document.getElementById("countdown-seconds").innerHTML = secondsLeft;

}, 1000);
