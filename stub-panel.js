#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response, url){
	if (url.pathname == "/login") {
		response.setHeader("Set-Cookie", ["username=dummy", "identity=Student"]);
		response.write(JSON.stringify({username : "dummy", role : "Student"}));
	} else if (url.pathname == "/announce") {
		response.write('["系统正在建设中!", "系统也还在调试中"]');
	} else if (url.pathname == "/profile") {
		response.write(JSON.stringify({ name : "形参", id : "09212035", order : 25, selectedSubject : "xxxx"}));
	} else if (url.pathname == "/phase") {
		response.write(JSON.stringify({ phase : 2 }));
	} else if (url.pathname == "/subject") {
		response.write(JSON.stringify({
			subject : [{
				id : "yyyy",
				name : "毕业设计双选系统",
				desc : "毕业设计双选系统",
				type1 : 1,
				type2 : 2,
				source : 1,
				professor : {
					realname : "ddd",
					username : "dummy"

				},
				selected_by : []
			}, {
				id : "xxxx",
				name : "其他毕业设计系统",
				desc : "简单描述",
				type1 : 2,
				type2 : 1,
				source : 3,
				professor : {
					realname : "ddd",
					username : "dummy"
				}
				selected_ty : [ {
					username : "09212001",
					realname :  "当米一"
				}, {
					username : "09212002",
					realname :  "当米二"
				}]
			}]
		}));
	} else if (url.pathname == "/student") {
		response.write(JSON.stringify({
			student : [
				{
					username : "09212001",
					realname : "当米一",
					cls : "2009211501",
					cls_idx : 1,
					selected : "yyyy",
				},
				{
					username : "09212002",
					realname : "当米二",
					cls : "2009211502",
					cls_idx : 1,
					selected : "yyyy",
				}
			]
		}));

	} else if (url.pathname == "/announce") {
		response.write(JSON.stringify({
			announce : "正在调试中"
		}));
	} else {
		response.write(JSON.stringify({}));
	}
	request.pipe(process.stdout);
	response.end();
}, {
	basePath : "bupt-tsp",
	port : 8080,
});


