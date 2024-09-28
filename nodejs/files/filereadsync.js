

//file Read sync method

// const http = require('http')
// const fs = require('fs')
// http.createServer((request,response)=>{
//     response.writeHead(200,{
//         'Content-Type' : 'text/html'
//  });
//  try{
//     const data = fs.readFileSync('index.html',{
//         encoding : "utf-8"
//     });
//     response.write(data);

//  }
//  catch(e){
//     response.write("<h1 style='color:red;'>404 Error: Page Not Found</h1>");

//  }
//  (()=>response.write("<h1> submit the Form</h1>"))();
// }).listen(3000);

//to reading text file 

const http = require('http')
const fs = require('fs')
http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type' : 'text/html'
 });
 try{
    const data = fs.readFileSync('text.txt',{
        encoding : "utf-8"
    });
    response.write(data);

 }
 catch(e){
    response.write(`<h1>${data}</h1>`);

 }
 (()=>response.write("<h1> submit the Form</h1>"))();
}).listen(3000);