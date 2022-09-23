const currentDay = moment().format("dddd, LL");
// console.log(currentDay);
let $currentDay = $("#currentDay");

let currentTime = moment().format("hh:mm a")
// console.log(currentTime);

$currentDay.text(currentDay);
