// const http  = require("http");

// const server = http.createServer((req,res) =>{

//     res.writeHead(200,{"Content-Type" : "text/plain; charset=utf-8"});
//     res.end("Hi!");
// });

// server.listen(3000,() =>{
//     console.log("Program is working on port 3000.");
// })

const http = require("http");

const host = 'localhost';
const port = 3000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});