const http = require('http')
const server = http.createServer((req,res)=>{
    //console.log(req)
    //console.log(req.method)
    const {headers,url,method} = req
    console.log(headers)
    console.log(url)
    console.log(method)
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify({status : 200,message : "my first api"}));


});

const port = 3000;
server.listen(port,()=>console.log(`Server running on ${port}`))