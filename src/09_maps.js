
let map = new Map()
map.set('name', 'david')
console.log(map.get('name'))  // david
console.log(map.has('name'))  // true


// Arbitrary values as keys
let map2 = new Map([
    ['name', 'david'],
    [true, 'false'],
    [1, 'one'],
    [{}, 'object'],
    [function (){}, 'function']
]);

for (let key of map2.keys()) {
    console.log(typeof key);  // string, boolean, number, object, function
}

// .entries()
for (let entry of map2.entries()) {
    console.log(entry[0], entry[1])
}
/*
name david
true 'false'
1 'one'
{} 'object'
[Function] 'function'
*/

for (let [key, value] of map2.entries()) {
    console.log(key, value)
}
/*
name david
true 'false'
1 'one'
{} 'object'
[Function] 'function'
*/