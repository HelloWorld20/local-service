"use strict"


module.exports = (app) => {
	
	app.get('/api', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send('your method is GET');
	})

	app.post('/api', (req, res) => {
		// res.setHeader('Content-Type', 'text/plain');
		// res.write('you posted:\n');
		// res.end(JSON.stringify(req.body, null, 2));
		res.json({name: 'wei', value: 5})
	})
}