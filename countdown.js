//=============================================================================\\
//                             Christmas countdown 1.0                          \\
//                                made by nullcheats                             \\
//================================================================================\\
let ChristmasDate;
let CurrentDate;

/*
The functions below will simply return the days , months , minutes and seconds till christmas
Functions use the "current datae" & "christmas date" for calculations
Thanks to Florin Pop for helping me find the calculations
*/
let Days_christmas = () => {
    return Math.ceil((ChristmasDate.getTime() - CurrentDate.getTime()) / (1000 * 60 * 60 * 24));
}
let Hours_christmas = () => {
    return Math.floor(Seconds_christmas() / 3600);
}
let Minutes_christmas = () => {
    return Math.floor(Seconds_christmas() / 60);
}
let Seconds_christmas = () => {
    return Math.floor((ChristmasDate.getTime() - CurrentDate.getTime()) / 1000);
}

/*
This is the main function that will add values to the innerHTML for output
Other dates can be set here by replacing the "Christmas" date variable
*/
const CountdownFunction = () => {
    CurrentDate = new Date();
    ChristmasDate = new Date(CurrentDate.getFullYear(), 11, 25);
    if (CurrentDate.getMonth() == 11 && CurrentDate.getDate() > 25) {
        ChristmasDate.setFullYear(ChristmasDate.getFullYear() + 1);
    }
    document.getElementById("Day_value").innerHTML = Days_christmas();
    document.getElementById("Hours_value").innerHTML = Hours_christmas();
    document.getElementById("Minutes_value").innerHTML = Minutes_christmas();
    document.getElementById("Seconds_value").innerHTML = Seconds_christmas();
}

/*
This interval is created to start a loop upon page load
Loop occurs every 100ms (1 second) to update the values on the page
This simply invokes CountdownFunction()
*/

window.setInterval(function() {
    CountdownFunction();
}, 1000);

// 1 hour = 3600 seconds
// 1 minute = 60 seconds
// Include check for 11th month