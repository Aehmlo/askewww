const express = require("express");
const app = express();
const serve = express.static;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(serve("./public"));

app.get("/", function(req, res) {
	res.render("index");
});

module.exports = app;