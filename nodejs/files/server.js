//am going to creating a server by using http module in node.js (built -in modules)

const http = require('http');
http.createServer(function(req,res){
res.write("Hey kiruthiga,Hello world");
res.end();
}).listen(3000);



