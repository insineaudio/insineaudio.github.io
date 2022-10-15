// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
/*
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
*/

/*
var user_defined = 2;
var sec = 0;
var min = 0;
var x;
var y;
var flag = 0;

function startTimer() {
    if (flag == 0) {
        x = setInterval(function() {

            document.getElementById("timer").innerHTML = min + ":" +sec++;
            if (sec == 10) {
                min++;
                sec = 0;
            }

            if (min == user_defined) {
                console.log("Time to chill!");
                min = 0;
                sec = 0;
            }

        }, 1000);
        flag = 1;
    } else {
        flag = 0;
        sec = 0;
        min = 0;
        clearInterval(x);
        startTimer();
    }
}

function setTimer() {
    sec = 0;
    min = 0;
    user_defined = document.getElementById('end_minute_input').value;
    console.log(user_defined);
    if (flag == 1) {
        clearInterval(x);
        flag = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec;
}

function resetTimer() {
    sec = 0;
    min = 0;
    if (flag == 1) {
        clearInterval(x);
        flag = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec;
}
*/

function beep() {
    var snd = new Audio("resources/alarm.mp3");  
    snd.play();
}

var sec = 0;
var min = 25;
var min_user = 25;

var x;
var y;
var flag = 0;


var c_sec = 0;
var c_min = 5;
var c_min_user = 5;

var c_x;
var c_y;
var c_flag = 0;

function startTimer() { 
    if (flag == 0) {
        x = setInterval(function() {
            document.getElementById("worktimer").innerHTML = min + ":" + sec ;

            if (min == -1) {
                clearInterval(x);
                sec = 0;
                min = 0;
                document.getElementById("worktimer").innerHTML ="Time to chill!";
                beep();
            }

            if (sec == 1) {
                sec = 59;
                min--;
            } else {
                if (sec == 0) {
                    min--;
                    sec = 59;
                } else {
                    sec--;
                }
            }
        }, 1000);

        flag = 1;
    } else {
        flag = 0;
        sec = 0;
        min = min_user;
        clearInterval(x);
        startTimer();
    }
}

function pauseTimer() {
    if (flag == 1) {
        clearInterval(x);
        flag = 0;
    }
}

function setTimer() {
    sec = 0;
    min_user = Math.floor(document.getElementById('end_minute_input').value);
    min = min_user;
    document.getElementById("worktimer").innerHTML = min + ":" + sec;
    if (flag == 1) {
        clearInterval(x);
        flag = 0;
    }
}

function resetTimer() {
    sec = 0;
    min = min_user;
    document.getElementById("worktimer").innerHTML = min + ":" + sec;
    if (flag == 1) {
        clearInterval(x);
        flag = 0;
    }
}

function startChillTimer() {
    if (c_flag == 0) {
        c_x = setInterval(function() {
            document.getElementById("chilltimer").innerHTML = c_min + ":" + c_sec ;

            if (c_min == -1) {
                clearInterval(c_x);
                c_sec = 0;
                c_min = 0;
                document.getElementById("chilltimer").innerHTML ="Time to work!";
                document.getElementById("work-time").setAttribute("color", "#800F0F;");
                beep();
            }

            if (c_sec == 1) {
                c_sec = 59;
                c_min--;
            } else {
                if (c_sec == 0) {
                    c_min--;
                    c_sec = 59;
                } else {
                    c_sec--;
                }
            }
        }, 1000);

        c_flag = 1;
    } else {
        c_flag = 0;
        c_sec = 0;
        c_min = c_min_user;
        clearInterval(c_x);
        startChillTimer()
    }
}

function setChillTimer() {
    c_sec = 0;
    c_min_user = Math.floor(document.getElementById('end_minute_input2').value);

    c_min = c_min_user;
    document.getElementById("chilltimer").innerHTML = c_min + ":" + c_sec;
    if (c_flag == 1) {
        clearInterval(c_x);
        c_flag = 0;
    }
}
