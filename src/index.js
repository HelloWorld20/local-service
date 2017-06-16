const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./route/api.js');
const upload = require('./route/upload.js')

const config = require('./config.js')

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//静态资源
app.use('/static', express.static(config.staticPath()));
//根目录
app.get('/', (req, res) => {
	res.send('Hello express localhost server');
})

//api接口
api(app);

upload(app);

//500
app.use( (err, req, res, next) => {
  	console.error(err.stack);
  	res.status(500).send('500.Something goes wrong!');
});
//404
app.use( (req, res, next) => {
  	res.status(404).send('404 page.');
});


app.listen(3000, () => {
	console.log('Server is runing at 192.168.22.161:3000');
	console.log('');
	console.log('static url: http://192.168.22.161:3000/static/');
	console.log('');
	console.log('server root:' + config.staticPath())
})