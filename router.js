/**
 * Router for defining the routing rules.
 */

 
 function route(handle,pathName) {
  console.log("Routing the request.......... " + pathName);
  if (typeof handle[pathName] === 'function') {
    return handle[pathName]();
  } else {
    console.log("No request handler found." + pathName);
    return "404";
  }
}

exports.route = route;