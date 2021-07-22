const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
if(req.url == "/"){
res.end("Hello from home side");
}else if(req.url == "/about"){
res.end("Hello from about us side");
}else if(req.url == "/contact"){
res.end("Hell from contact side");
}else if(req.url == "/userapi"){
fs.readFile('sample2.json',"utf-8",(err,data) => {
console.log(data);
});
res.end("Hello from user api side");
}else{
res.writeHead(404,{"content-type":"text/html"});
res.end("404 page error");
}
});
 server.listen(3000,"127.0.0.1",() => {
 console.log("listening to the port 3000");
 });