
let snack = "Meow Mix"

function getFood(food) {
    if (food) {
        let snack = 'Friskies'
        return snack
    }
    return snack
}

console.log(getFood(true))  // Friskies
console.log(getFood(false))  // Meow Mix
