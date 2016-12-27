
var request = require('requests')

new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
        if (body) {
            resolve(JSON.parse(body))
        } else {
            resolve({})
        }
    })
});


// Parallelizing using Promises
let urls = [
    '/api/commits',
    '/api/issues/opened',
    '/api/issues/assigned',
    '/api/issues/completed',
    '/api/issues/comments',
    '/api/pullrequests'
]

let promises = urls.map((url) => {
    return new Promise((resolve, reject) => {
        $.ajax({url: url})
            .done((data) => {
                resolve(data)
            })
    })
})

Promise.all(promises)
    .then((results) => {
        // Do something with results of all our promises
    })
