var http = require('http');
var url = require('url'); 
var fs = require('fs'); 


http.createServer(function (req, res) {
	
	 
	var q = url.parse(req.url, true);
	
	var filename = "." + q.pathname; 
	
	console.log("filename : "+ filename); 
	if ( (q.pathname == "/") || (q.pathname == "") ) 
	{
			res.writeHead(200, {'Content-Type': 'text/html'}); 
			res.write("<h2> SampleNodeJS application</h2><br>"); 
			res.write("Summer : <a href=\"static/summer.html\">Summer</a><br>");
			res.write("Winter : <a href=\"static/winter.html\">Winter</a><br>");
			res.write("Spring : <a href=\"static/spring.html\">Spring</a><br><br>");
			res.write("About : <a href=\"static/about.html\">About</a><br><br>");
			res.write("City Picture: <a href=\"static/city.jpeg\">City</a><br>");
			res.write("Nature Picture: <a href=\"static/nature.jpeg\">Nature</a><br>");
			
			return res.end(); 
	}
	
	fs.readFile(filename, function(err, data) { 
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'}); 
			res.write("<h2> Invalid Path \"" + q.pathname + "\", <font color=\"red\"> ErrorCode 404: Not Found </font> <h2>"); 
			return res.end(); 
		}
		
		if (filename.endsWith(".jpeg") || filename.endsWith(".jpg") || filename.endsWith(".gif") ) {
			res.writeHead(200, {'Content-Type': 'image/jpg'}); 		
		} else { 
			res.writeHead(200, {'Content-Type': 'text/html'}); 
		}
		
		res.write(data); 
		return res.end(); 
	});
}).listen(8080);
