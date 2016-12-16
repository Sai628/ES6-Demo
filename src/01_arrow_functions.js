
function Person(name) {
    this.name = name
}

Person.prototype.prefixName = function(arr) {
    return arr.map( character => this.name + " " + character)
}

let person = new Person("Chen")
console.log(person.prefixName(["yi", "hua"]))  // [ 'Chen yi', 'Chen hua' ]


const arr = [1, 2, 3, 4, 5]
const squares = arr.map(x => x * x)
console.log(squares)  // [ 1, 4, 9, 16, 25 ]
