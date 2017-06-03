var express = require('express');
var app = express();
var path = require('path');
var PythonShell = require('python-shell');

app.use(express.static('public'));
 

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
	console.log("Got a GET request for the homepage");
	res.sendFile(path.join(__dirname + '/index.html'));
	// res.send('Hello GET');
})

app.get('/state', function(req, res) {
	var options = {
	  pythonOptions: ['-u'],
	  args: 'get'
	};

	PythonShell.run('scripts/fanController.py', options, function (err, results) {
  	if (err) throw err;
  	if (results[0] == true)
  		res.send('on')
  	else
  		res.send('off')
	});
})

// This responds a POST request for the homepage
app.post('/on', function (req, res) {
	var options = {
	  pythonOptions: ['-u'],
	  args: 'on'
	};

	PythonShell.run('scripts/fanController.py', options, function (err, results) {
  	if (err) throw err;	  	

  	if (results[0] == true)
  		res.send('on')
  	else
  		res.send('none')
	});
})

app.post('/off', function (req, res) {
	var options = {
	  pythonOptions: ['-u'],
	  args: 'off'
	};

	PythonShell.run('scripts/fanController.py', options, function (err, results) {
  	if (err) throw err;
  	
  	if (results[0] == true)
  		res.send('off')
  	else
  		res.send('none')
	});
})

var server = app.listen(3000, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
	console.log('Setting fan to previous state');
	var options = {
	  pythonOptions: ['-u'],
	  args: 'reload'
	};
	PythonShell.run('scripts/fanController.py', options);
})
