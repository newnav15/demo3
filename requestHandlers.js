/**
 * Request Handler module to handle all the requests
 *
 */
 
  
 function landing() {
  console.log("Request Handler --> Request handler 'landning' was called.");
  return "Hello landing ..............................................";
}

function blocking() {
  sleep(10000);
  return "Blocking now.............";
}

var exec = require("child_process").exec;

function nonBlocking(){
	var content = "hi how are u.............";
	exec("find/", function (error, stdout, stderr) {
		  	console.log("request processing started now.............................");
		    sleep(10000);
		    console.log("request processing ended now.............................");
	});
  	return "processing...........";
}

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}



exports.landing = landing;
exports.blocking = blocking;
exports.nonBlocking = nonBlocking;