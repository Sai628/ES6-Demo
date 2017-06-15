
// Default Parameters
function addTwoNumbers(x=0, y=0) {
    return x + y
}

console.log(addTwoNumbers(2, 4))  // 6
console.log(addTwoNumbers(2))  // 2
console.log(addTwoNumbers())  // 0


// Rest Parameters
function logArguments(...args) {
    for (let arg of args) {
        console.log(arg)
    }
}

logArguments()
logArguments(1, 'a')  // 1 a
logArguments(1, 'a', {k: 'v'})  // 1 a { k: 'v' }


// Named Parameters
function initializeCanvas( {height=600, width=400, lineStroke='black'} ) {
    //...
}

function initializeCanvas2( {height=600, widt=400, lineStroke='black'} = {} ) {
    // ...
}


// Spread Operator
console.log(Math.max(...[-1, 100, 9001, -32]))  // 9001

var arr = [1, ...[2, 3], 4]
console.log(arr)  // [ 1, 2, 3, 4 ]

var arr1 = [0, 1, 2]
var arr2 = [3, 4, 5]
arr1.push(...arr2)
console.log(arr1)  // [ 0, 1, 2, 3, 4, 5 ]
