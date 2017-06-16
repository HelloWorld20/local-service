path = require('path')
module.exports = {
	uploadHtml: () => path.normalize(__dirname + '/static/html/upload.html'),
	uploadDist: () => path.normalize(__dirname + '/upload/'),
	staticPath: () => path.normalize('E:/myworkspace/local/src'),
}