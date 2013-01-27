/**
*
* Server module.
* starts the server,
* Accepts the request, streams the pathname , with the route passed we route to request handler,
*
*
**/

var http = require("http");
var url = require("url");


function init(route, handle) {
  
	  function onRequest(request, response) {
	    var pathname = url.parse(request.url).pathname;
	    var content = route(handle,pathname);
	    response.writeHead(200, {"Content-Type": "text/plain"});
	    response.write(content);
	    response.end();
	  }
	
	  http.createServer(onRequest).listen(3001);
	  console.log("Server has started..........");
  
}

exports.init = init;
