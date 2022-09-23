const currentDay = moment().format("dddd, LL");
// console.log(currentDay);
let $currentDay = $("#currentDay");
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
let $button = $("button");
arrayof$Times = [$9amInput, $10amInput, $11amInput, $12pmInput, $1pmInput, $2pmInput, $3pmInput, $4pmInput, $5pmInput];

arrayof$TimesID = [$9amInput.attr("id"), $10amInput.attr("id"), $11amInput.attr("id"), $12pmInput.attr("id"), $1pmInput.attr("id"), $2pmInput.attr("id"), $3pmInput.attr("id"), $4pmInput.attr("id"), $5pmInput.attr("id")];

$currentDay.text(currentDay);

for (i=0; i<arrayof$Times.length; i++) {
    if (moment("3 PM", 'h A').isAfter(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("past");
    } else if (moment("3 PM", 'h A').isSame(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("present");
    } else if (moment("3 PM", 'h A').isBefore(moment("9 AM", 'h A').add(i, 'h'))) {
        arrayof$Times[i].addClass("future");
    }
    arrayof$Times[i].val(localStorage.getItem(arrayof$TimesID[i]));
}

$button.click(function() {
    $currEntryAtt = $(this).siblings("input").attr("id");
    console.log($currEntryAtt);
    $currEntry = $(this).siblings("input").val();
    console.log($currEntry);
    localStorage.setItem($currEntryAtt, $currEntry);
    console.log(localStorage.getItem("9am"));
})
