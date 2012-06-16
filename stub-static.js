#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response){
	response.end();

}, {basePath : "bupt-tsp"});


