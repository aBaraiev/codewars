// Write a function, which takes a non-negative integer (seconds)
// as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

const humanReadable = seconds => `${Math.floor(seconds / 3600).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})}:${Math.floor(seconds % 3600 / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
})}:${(seconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}`

