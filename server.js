const express = require('express');
const app = express();
const mongoose = require('mongoose');
let connected = false;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
	connected = true;
	console.log('db connected')
})
.catch( e => {
	connected = false;
	console.log('db not connected')
})

app.get("/", (req, res) => res.type('html').send('<h1>hello world</h1>'));

app.post("/", (req, res) => res.send("post hit"));

app.listen(process.env.PORT || 3000, () => console.log('connected'))