
var http = require("http");
var con = require("console");
var fs = require("fs");


exports.createStubServer = function(callback, cookie){
	var server = http.createServer(function(req, res){
		con.log(req.url);
		res.setHeader('Set-Cookie', cookie);
		try {
			if (req.url.match(/.+\..+/g)) {
				var file = fs.createReadStream(__dirname + "/.." + req.url);
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
