
let text = `This string contains "double quotes" which don't need to be escaped anymore.`
console.log(text)  // This string contains "double quotes" which don't need to be escaped anymore.


let name = 'Tiger'
let age = 13
console.log(`My cat is named ${name} and is ${age} years old.`)  // My cat is named Tiger and is 13 years old.


let lines = `cat
dog
nickelodeon`
console.log(lines)
// cat
// dog
// nickelodeon


let today = new Date()
console.log(`The time and date is ${today.toLocaleString()}`)  // The time and date is 12/16/2016, 4:18:48 PM
