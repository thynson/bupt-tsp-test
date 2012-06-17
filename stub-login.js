#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response, url){
	if (url.pathname == "/login") {
		response.setHeader("Set-Cookie", ["username=dummy", "identity=dummy"]);
		response.write("{}");
	} else if (url.pathname == "/announce") {
		response.write("Dummy anouncement");
	}
	response.end();
}, {
	basePath : "bupt-tsp",
	port : 8080,
});


