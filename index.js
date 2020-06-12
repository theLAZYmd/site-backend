const express = require('express');
const app = express();
const port = 8081;

const Package = require('./package.json');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});  

app.use(express.static('./'));

app.get('/', (req, res) => {
	res.send('Using backend version ' + Package.version);
})

app.listen(port, () => {
	console.log('Listening on port ' + port);
});