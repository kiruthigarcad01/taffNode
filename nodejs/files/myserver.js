const http = require('http')
const { url } = require('inspector')
const port = 6851
//to handle the req and responce in server here implemented requestHandler function first function

const requestHandler =((req, res)=>{
    console.log(req.url)
    res.end("hello node js")
});

//creating server
const server = http.createServer(requestHandler)
server.listen(port,(err)=>{
    if(err)
    {
        return console.log("Something is happens")
    }
    console.log(`server is running on local port ${port}`)
});

