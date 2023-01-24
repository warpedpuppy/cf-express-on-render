const express = require('express');
const app = express();
const mongoose = require('mongoose');
let connected = false;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
	connected = true;
})
.catch( e => {
	connected = false;
})

app.get('/', (req, res) => {

	res.send('connected: '+ connected.toString())
})

app.listen(3000, () => console.log('connected'))