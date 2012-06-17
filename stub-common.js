
var http = require("http");
var con = require("console");
var fs = require("fs");
var url = require("url");


exports.createStubServer = function(callback, option){
	var basePath = option.basePath || null;
	option.port = option.port || 8080;

	if (basePath === null)
		return null;

	var server = http.createServer(function(req, res){
		con.log(req.url);
		try {
			var u = url.parse(req.url);
			if (u.pathname.match(/.+\..+/g)) {
				var file = fs.createReadStream(__dirname + "/./" + basePath
					+ u.pathname);
				file.pipe(res);
			} else {
				callback(req, res, u);
			}
		} catch(err) {
			con.dir(err);
		}
	});
	server.listen(option.port);
	return server;
}
