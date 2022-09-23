const currentDay = moment().format("dddd, LL");
// console.log(currentDay);
let $currentDay = $("#currentDay");
// console.log(currentTime);
let $button = $("button");
arrayof$Times = [$("#9am"), $("#10am"), $("#11am"), $("#12pm"), $("#1pm"), $("#2pm"), $("#3pm"), $("#4pm"), $("#5pm")];

arrayof$TimesID = [$("#9am").attr("id"), $("#10am").attr("id"), $("#11am").attr("id"), $("#12pm").attr("id"), $("#1pm").attr("id"), $("#2pm").attr("id"), $("#3pm").attr("id"), $("#4pm").attr("id"), $("#5pm").attr("id")];

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
