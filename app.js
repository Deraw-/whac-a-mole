var express 	= require('express'),
	path 		= require('path'),
	compression = require('compression'),

	app = express(),
	port = 8001;

// Use maximal compression
.use(compression({level: 9}))

// Routes
.get('/', function(req, res)
{
	res.render('index.ejs');
})
.get('/i', function(req, res)
{
	res.setHeader('Content-Type', 'image/svg+xml');
	res.sendFile(__dirname + '/views/i.svg');
}).listen(port);

console.log('Server started at port ' + port);
