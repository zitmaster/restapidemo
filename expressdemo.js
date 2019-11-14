const express = require("express");
const joi = require("joi");
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
	console.log("Received request at root");
	response.send("Welcome to the REST API demo root!");
});

app.get("/api/:input", (request, response) => {
	console.log("Received echo request");
	response.send("Echo: " + request.params.input);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port " + port));
