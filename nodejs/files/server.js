//am going to creating a server by using http module in node.js (built -in modules)

// const http = require('http');
// http.createServer(function(req,res){
// res.write("Hey kiruthiga,Hello world");
// res.end();
// }).listen(3000);

const fs = require('fs');
function readFile(callback) {
    fs.readFile('text.txt', 'utf8', (err, data) => {
        if (err) throw err
        callback(data);
    });
}
function displayContent(content) {
    console.log(content);
}


readFile(displayContent);




