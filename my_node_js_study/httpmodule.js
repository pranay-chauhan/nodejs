//For creating server in node js we use "httpmodule"

const http = require('http');
const server = http.createServer(function(req,res){
//Here the createServer method is already defined in http module for creating server and it takes two argument called request(req) and response(res) with function
//res.writeHead(200,{'content-type':'text/plain'}) // For Plain text
res.writeHead(200,{'content-type':'text/HTML'}) // For HTML
//here writeHead for the given content type(which is HTML or plain text) with status if its success 200 will come
res.write('<h1 style="color:red">Node JS HTTP Module</h1>');
//res.write('message') it will print the message in the browser
res.end()
// end () for the end the response
//Remember that don't forget to add res.end()
}).listen(4200,()=>console.log('server running on port 4000'));

//Here listen 3000 for the server port will run at 3000, here second argument for printing the result in console or for given requirement, but we don't give that argument then it will not print nothing there