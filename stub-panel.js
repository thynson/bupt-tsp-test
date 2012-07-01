#!/usr/bin/nodejs

var stub = require("./stub-common");

var server = stub.createStubServer(function(request, response, url){
	if (url.pathname == "/login") {
		response.setHeader("Set-Cookie", ["username=dummy", "identity=Student"]);
		response.write("{}");
	} else if (url.pathname == "/announce") {
		response.write('["系统正在建设中!", "系统也还在调试中"]');
	} else if (url.pathname == "/profile") {
		response.write(JSON.stringify({ name : "形参", id : "09212035", order : 25, selectedSubject : "xxxx"}));
	} else if (url.pathname == "/phase") {
		response.write(JSON.stringify({ phase : 2 }));
	} else if (url.pathname == "/subject") {
		response.write(JSON.stringify({
			subject : [{
				id : "xxxx",
				name : "毕业设计双选系统",
				desc : "毕业设计双选系统",
				type1 : "哈哈",
				type2 : "hehe",
				source : "xixi",
				selected_by: [
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "aaa" },
					{ realname : "bbb" }
				],
				professor : {
					realname : "ddd"
				}
			}, {
				id : "yyyy",
				name : "毕业设计双选系统",
				desc : "毕业设计双选系统",
				type1 : "哈哈",
				type2 : "hehe",
				source : "xixi",
				applied_to : {
					realname : "ccc"
				},
				professor : {
					realname : "ddd"
				}
			}, {
				id : "xxxx",
				name : "毕业设计双选系统",
				desc : "毕业设计双选系统",
				type1 : "哈哈",
				type2 : "hehe",
				source : "xixi",
				selected_by: [ {
					realname : "aaa"
				}, {
					realname : "bbb"
				} ],
				professor : {
					realname : "ddd"
				}
			}, {
				id : "yyyy",
				name : "毕业设计双选系统",
				desc : "毕业设计双选系统",
				type1 : "哈哈",
				type2 : "hehe",
				source : "xixi",
				applied_to : {
					realname : "ccc"
				},
				professor : {
					realname : "ddd"
				}
			}]
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


