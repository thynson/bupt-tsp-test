#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response, url){
	if (url.pathname == "/login") {
		response.setHeader("Set-Cookie", ["username=dummy", "identity=Student"]);
		response.write("{}");
	} else if (url.pathname == "/announce") {
		response.write('["系统正在建设中!", "系统也还在调试中"]');
	} else if (url.pathname == "/profile") {
		response.write(JSON.stringify({ name : "形参", id : "09212035", order : 25}));
	} else if (url.pathname == "/phase") {
		response.write(JSON.stringify({ phase : 2 }));
	} else if (url.pathname == "/chpasswd") {
		response.write(JSON.stringify({}));
	}
	response.end();
}, {
	basePath : "bupt-tsp",
	port : 8080,
});


