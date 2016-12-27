
// weakmaps for privacy
let _age = new WeakMap()

class Person
{
    constructor(age) {
        _age.set(this, age)
    }


    incrementAge() {
        let age = _age.get(this)
        if (age > 50) {
            console.log('midlife crisis')
        }
    }
}

const person = new Person(90)
person.incrementAge()  // midlife crisis
console.log(Reflect.ownKeys(person))  // []