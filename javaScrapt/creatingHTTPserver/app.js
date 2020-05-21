// In this file only the text is going to be send to server not html file

const http = require('http');
const port = 5000;

const server = http.createServer(function(req, res){
  Response.write('Hello World');
  res.end();
})

server.listen(port, function (error){
  if (error){
    console.log('Something is wrong', error);
  }else{
    console.log('Server is listening on port' + port);
  }
})