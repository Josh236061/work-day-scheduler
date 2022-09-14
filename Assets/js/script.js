var currentDayEl = document.querySelector("#currentDay");
var timeEl = document.querySelector(".timeblock .time").innerText;
console.log(timeEl);

var nowDate = moment().format("MMMM Do YYYY");
var nowTime = moment().format("hh:mm:ss A");
var compareTime = moment().format("hA");

console.log(moment().hour());
console.log(nowDate);
console.log(nowTime);
console.log(compareTime);

var setCurrentDay = function () {
  var setDate = (currentDayEl.innerText = nowDate);
  return setDate;
};


var convertTime = function (value) {};

setCurrentDay();
