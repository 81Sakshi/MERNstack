

var http= require('http')
var fs= require('fs');
var os =require('os');

console.log(os.freemem());
console.log(os.cpus());


console.log("Normal Log");
console.warn("danger");
console.assert(true,"transaction Completed");
console.assert(false,"transaction failed");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  

if(req.url==="/"){
  fs.readFile("note.txt",(error,data) => {
  res.write(data);
  res.end("NODE.JS");
  }
)};
  if(req.url==="/product"){
    res.write('{"id":1,"name":"School bag","price":"500"}');
    res.end();
  }
  if(req.url==="/product1"){
    res.write('{"id":2,"name":"water bottle","price":"300"}');
    res.end();
  }
  if(req.url==="/product2"){
    res.write('{"id":3,"name":"shoes","price":"1000"}');
    res.end();
  }
  if(req.url==="/user"){
    res.write('{"name":xyz,"id":"20","address":"pqr"}');
    res.end();
  }
  if(req.url==="/user1"){
    res.write('{"name":abc,"id":"25","address":"rst"}');
    res.end();
  }
  

  });


// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`