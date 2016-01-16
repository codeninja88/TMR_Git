//Create access to the http library module
var http = require('http');

//Use the http library module to create server
var server = http.createServer(

    //Create callback function
    //This will run in response to the website being visited
    function(req, res) {

        //Attach a status code to the header of the response
        //200 == "OK"
        res.writeHead(200);
        //Send a text-based response to display on screen
        res.end('Node is Awesome!');
    }

);

//Tell the server where it should expect to receive requests from
server.listen(3000);