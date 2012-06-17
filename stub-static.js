#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response, url){
	response.end();
}, {
	basePath : "bupt-tsp",
	port : 8080,
});


