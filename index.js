var koa = require("koa");

var app = koa();

app.use(function *() {
	this.body = "Hello, cubers of the world!";
});

module.exports = app;