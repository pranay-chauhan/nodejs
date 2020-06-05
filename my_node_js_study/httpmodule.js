const http = require('http')
//http module is use for the "creating the server". Here we are not using the /http because it is directly available.
const server = http.createServer(function (req, res) {
    //We can give formate of following res.write message either in html or text for that we use the following way
    //res.writeHead(200,{'content-type':'text/plain'});here 200 is for the status,this is for plain text if you use the html tag it will come with tag in the browser
    res.writeHead(200,{'content-type':'text/html'}) //here 200 is for the status,this is for html functionality
    res.write('<h1>Hello http module</h1>') //This is for the write content on web page after web page start with following port number
    res.end();
    //This is mandetory for ending the process
}).listen(8080,()=>console.log('server running on port 8080')) //Here is console.log for the printing same or checking something if server starts or run successfully.
