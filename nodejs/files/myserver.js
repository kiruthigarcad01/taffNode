const http = require('http') 
const port = 3000

const requestHandler =((req, res)=>{
    console.log(req.url)
    res.end("hello node js")
});


const server = http.createServer(requestHandler)
server.listen(port,(err)=>{
    if(err)
    {
        return console.log("Something is happens")
    }
    console.log(`server is running on local port ${port}`)
});

