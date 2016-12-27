
var request = require('requests')


function* sillyGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

var generator = sillyGenerator()
console.log(generator.next())  // { value: 1, done: false }
console.log(generator.next())  // { value: 2, done: false }
console.log(generator.next())  // { value: 3, done: false }
console.log(generator.next())  // { value: 4, done: false }

for (let val of sillyGenerator()) {
    console.log(val)  // 1, 2, 3, 4
}


// Real Generator Function
function* factorial() {
    let [current, total] = [0, 1]

    while (true) {
        yield total
        current++
        total = total * current
    }
}

for (let n of factorial()) {
    console.log(n)
    if (n > 100000) {
        break
    }
}
/*
1
1
2
6
24
120
720
5040
40320
362880
*/


// Generators & Promises
function iterateGenerator(gen) {
    var generator = gen()
    var ret
    (function iterate(val){
        ret = generator.next()
        if (!ret.done) {
            ret.value.then(iterate)
        }
    })()
}

iterateGenerator(function* getData(){
    var entry1 = yield request('http://some_api/item1')
    var data1 = JSON.parse(entry1)
    var entry2 = yield request('http://some_api/item2')
    var data2 = JSON.parse(entry2)
})
