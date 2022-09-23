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

arrayof$Times = [$9amInput, $10amInput, $11amInput, $12pmInput, $1pmInput, $2pmInput, $3pmInput, $4pmInput, $5pmInput]

$currentDay.text(currentDay);

for (i=0; i<9; i++) {
    if (moment("3 PM", 'h A').isAfter(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("past");
    } else if (moment("3 PM", 'h A').isSame(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("present");
    } else if (moment("3 PM", 'h A').isBefore(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("future");
    }
}


console.log(moment("10 AM", 'h A').add(2, 'h').format("h A"))