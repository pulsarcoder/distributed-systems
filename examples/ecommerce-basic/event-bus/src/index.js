const express = require('express');

const app = express();

app.post('/create', (req, res) => {
	console.log('Creating the resource');
	res.status(201).send({});
});

app.listen(4001, () => {
	console.log('Listening at 4001');
});
