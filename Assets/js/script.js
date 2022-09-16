
// Defining initial variables
var currentDayEl = document.querySelector("#currentDay");
var timeEl = document.querySelector(".timeblock .time").innerText;
console.log(timeEl);

// Defining Date and Time variables
var nowDate = moment().format("MMMM Do YYYY");
var nowTime = moment().format("hh:mm:ss A");
var compareTime = moment().format("hA");

// logging Date and Time Parameters 
console.log(moment().hour());
console.log(nowDate);
console.log(nowTime);
console.log(compareTime);

// loading input texts into Storage 
var loadTasks = function() {
  task = JSON.parse(localStorage.getItem("text"));
}

var setCurrentDay = function () {
  
  var setDate = (currentDayEl.innerText = nowDate);
  return setDate;
};

// saving input texts into Storage
var saveTasks = function() {
  localStorage.setItem("text", JSON.stringify(text));
};

var convertTime = function (value) {};

saveTasks();

setCurrentDay();


