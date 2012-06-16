
var http = require("http");
var con = require("console");
var fs = require("fs");
var url = require("url");


exports.createStubServer = function(callback, option){
	var cookie = option.cookie || {};
	var basePath = option.basePath || null;

	if (basePath === null)
		return null;

	var server = http.createServer(function(req, res){
		con.log(req.url);
		res.setHeader('Set-Cookie', cookie);
		try {
			var u = url.parse(req.url);
			if (u.pathname.match(/.+\..+/g)) {
				var file = fs.createReadStream(__dirname + "/./" + basePath
					+ u.pathname);
				file.pipe(res);
			} else {
				callback(req,res);
			}
		} catch(err) {
			con.dir(err);
		}
	});
	server.listen(8080);
	return server;
}
