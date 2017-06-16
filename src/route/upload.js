"use strict"

const fs = require('fs')
const path = require('path')
const util = require('util')

const config = require('../config.js')

const formidable = require('formidable')

module.exports = (app) => {

	app.all('/upload', (req, res) => {
		if (req.method.toLowerCase() == 'post') {
	        // parse a file upload


	        let form = new formidable.IncomingForm();
	        // form.uploadDir = "./upload";
	        form.parse(req, (err, fields, files) => {
	            res.writeHead(200, {'content-type': 'text/plain'});
	            res.write('received upload:\n\n');

	            Object.keys(files).forEach((v, i) => {
	              	try{
	                	fs.writeFileSync(config.uploadDist() + files[v].name, fs.readFileSync(files[v].path))
	                	fs.unlinkSync(files[v].path)
	              	}catch(e) {
	                	console.warn(e)
	              	}
	            })

	            res.end(util.inspect({fields: fields, files: files}));
	        });

	        return;
    	}

  		// show a file upload form

	  	let html = fs.readFileSync(path.normalize(config.uploadHtml()));
	  	res.writeHead(200, {'content-type': 'text/html'});
	  	res.end(
	    	html
	  	);

	})


}