// Your task in order to complete this Kata is to write a function which formats a duration,
// given as a number of seconds, in a human-friendly way.
//
// The function must accept a non-negative integer. If it is zero, it just returns "now".
// Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
// It is much easier to understand with an example:
//
// * For seconds = 62, your function should return
// "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
// "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
// Note that spaces are important.
//
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc.
// In general, a positive integer andone of the valid units of time, separated by a space.
// The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", ").
// Except the last component, which is separated by " and ", just like it would be written in English.
//
// A more significant units of time will occur before than a least significant one.
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
// A component will not appear at all if its value happens to be zero.
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
// A unit of time must be used "as much as possible".
// It means that the function should not return 61 seconds, but 1 minute and 1 second instead.
// Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {

    if (seconds === 0) return 'now';
    let duration = [
        getYears(seconds),
        getDays(seconds),
        getHours(seconds),
        getMinutes(seconds),
        getSeconds(seconds)
    ]
        .filter(e => e !== 0);

    if (duration.length === 1)
        return duration[0];

    let last = duration.splice(-1);
    return `${duration.join(', ')} and ${last[0]}`;
}

function getYears(seconds) {
    let years = Math.floor(seconds / (365 * 24 * 60 * 60));
    return years && (years === 1 ? `${years} year` : `${years} years`);
}

function getDays(seconds) {
    let days = Math.floor(seconds / 3600 / 24) % 365;
    return days && (days === 1 ? `${days} day` : `${days} days`);
}

function getHours(seconds) {
    let hours = Math.floor(seconds / 3600) % 24;
    return hours && (hours === 1 ? `${hours} hour` : `${hours} hours`);
}

function getMinutes(seconds) {
    let mins = Math.floor(seconds % 3600 / 60);
    return mins && (mins === 1 ? `${mins} minute` : `${mins} minutes`);
}

function getSeconds(seconds) {
    let secs = seconds % 60;
    return secs && (secs === 1 ? `${secs} second` : `${secs} seconds`);
}