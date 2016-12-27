
// ES7

require("babel-polyfill")
var request = require('requests')

function getJSON(url) {
    return new Promise(function(resovle, reject){
        request(url, function(error, response, body){
            resovle(body)
        })
    })
}

async function main() {
    var data = await getJSON("http://news.baidu.com")
    console.log(data)
}

main()
