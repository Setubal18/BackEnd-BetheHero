import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
	return res.send('Hello World!')
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
