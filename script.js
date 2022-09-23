const currentDay = moment().format("dddd, LL");
// console.log(currentDay);
let $currentDay = $("#currentDay");

let currentTime = moment().format("h:mm A")
// console.log(currentTime);

let $9amInput = $("#9am");
let $10amInput = $("#10am");
let $11amInput = $("#11am");
let $12pmInput = $("#12pm");
let $1pmInput = $("#1pm");
let $2pmInput = $("#2pm");
let $3pmInput = $("#3pm");
let $4pmInput = $("#4pm");
let $5pmInput = $("#5pm");

$currentDay.text(currentDay);

if (moment().isAfter(moment("8:00 AM", 'h:mm A'))) {
    $9amInput.addClass("past");
}
