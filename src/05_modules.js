
// Exporting in CommonJS
module.exports = 1
module.exports = {foo: 'bar'}
module.exports = ['foo', 'bar']
module.exports = function bar() {}


// Named Exports
export var name = 'David'
export var age = 25


// exporting a list of objects
function sumTwo(a, b) {
    return a + b
}

function sumThree(a, b, c) {
    return a + b + c
}

export {sumTwo, sumThree}


// export functions, objects, and values(etc.)
export function sumTwoTest(a, b) {
    return a + b
}

export function sumThreeTest(a, b, c) {
    return a + b + c
}


// export default bindling
function sumTwoApi(a, b) {
    return a + b
}

function sumThreeApi(a, b, c) {
    return a + b + c
}

let api = {sumTwoApi, sumThreeApi}
export default api  // or `export { api as default }`


// import
/*
import "underscore"

import {sumTwo, sumThree} from 'math/addition'
import {sumTwo as addTwoNumbers, sumThree as sumThreeNumbers} from 'math/addition'

import * as additionUtil from 'math/addition'
const {sumTwo, sumThree} = additionUtil

import api from 'math/addition'
import {default as api} from 'math/addition'
*/
