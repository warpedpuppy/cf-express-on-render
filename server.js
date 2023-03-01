require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json())
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

const Models = require("./models");
const Movie = Models.Movie;
const User = Models.User;



app.get("/", (req, res) => res.type('html').send('<h1>hello world</h1>'));

app.get('/movies', (req, res) => {
	return Movie.find()
      .then((result) => {
        res.json(result);
      })
      .catch((e) => console.log(e));
})

app.post("/", (req, res) => res.send("post hit"));

app.listen(process.env.PORT || 3000, () => console.log('connected'))