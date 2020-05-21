// with this file we are going to send html file to server
const http = require('http'); // we call this to make http server
const fs = require('fs'); // we call this to read our HTML file
const port = 5000; // with this number we can call our web page

const server = http.createServer(function(req, res){ // here we are calling from our server for the file.
  res.writeHead(200, {'content-Type': 'text/html'}) 
  // tell the browser we are writing HTML code
  // by writing writeHead (), 200 is a states code to say every thing is ok to go
  // the we are writing the header to send first content-Type is the key of our object, the value will be text/html file.
  // so the server will parss it as html file.
  fs.readFile('index.html', function(error, data){ //readFile is a function inside fs file to read our html file
    if (error){
      res.writeHead(404);// 404 mean not found
      res.write('Error: File Not Found') // or just show at this file not found.
    }else{
      res.write(data); // or to read data what is in html file.
    }
    res.end();
  })
})

server.listen(port, function (error){
  if (error){
    console.log('Something is wrong', error);
  }else{
    console.log('Server is listening on port' + port);
  }
})