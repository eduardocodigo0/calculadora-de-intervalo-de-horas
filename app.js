"use strict";
var btn = document.querySelector("#btn-calcular");
var msg = document.querySelector("#msg");
var hr1 = document.querySelector("#hr1");
var min1 = document.querySelector("#min1");
var min2 = document.querySelector("#min2");
var hr2 = document.querySelector("#hr2");
var inputs = [].slice.call(document.getElementsByTagName("input"));
/* Input validation events */
inputs.forEach(function (i) {
    i.addEventListener("change", function (e) {
        if (i.id == "hr1" || i.id == "hr2") {
            i.value = i.valueAsNumber > 23 ? "23" : i.value;
            i.value = i.valueAsNumber < 0 ? "0" : i.value;
        }
        else if (i.id == "min1" || i.id == "min2") {
            i.value = i.valueAsNumber > 59 ? "59" : i.value;
            i.value = i.valueAsNumber < 0 ? "0" : i.value;
        }
    });
});
/* Set the btn event */
btn.addEventListener("click", function (e) {
    if (!hr1.value || !hr2.value || !min1.value || !min2.value) {
        msg.innerHTML = "Preencha todos os campos!!!";
        setTimeout(function () { msg.innerHTML = ''; }, 2000);
        return;
    }
    ;
    var t1 = { hours: hr1.valueAsNumber, minutes: min1.valueAsNumber };
    var t2 = { hours: hr2.valueAsNumber, minutes: min2.valueAsNumber };
    var final = getTimeDiference(t1, t2);
    msg.innerHTML = "A deferen\u00E7a entre os hor\u00E1rios \u00E9 de: " + (final.hours < 10 ? 0 : '') + final.hours + ":" + (final.minutes < 10 ? 0 : '') + final.minutes;
});
function getTimeDiference(t1, t2) {
    var finalHours;
    var finalMinutes;
    if (t1.hours > t2.hours) {
        finalHours = (t2.hours + 24) - t1.hours;
    }
    else {
        finalHours = t2.hours - t1.hours;
    }
    if (t1.minutes > t2.minutes) {
        --finalHours;
        finalMinutes = (t2.minutes + 60) - t1.minutes;
    }
    else {
        finalMinutes = t2.minutes - t1.minutes;
    }
    return {
        hours: finalHours,
        minutes: finalMinutes
    };
}
