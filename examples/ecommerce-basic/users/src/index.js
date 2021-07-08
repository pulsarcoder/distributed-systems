const express = require('express');

const app = express();

app.get('/users/create', (req, res) => {
	res.status(201).send("Hello World");
});

app.listen(4001, () => {
	console.log('Listening on 4001');
});
