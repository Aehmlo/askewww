const koa = require("koa");
const app = koa();

const Pug = require("koa-pug");
const pug = new Pug({
	viewPath: "./views",
	debug: false,
	pretty: true,
	locals: {},
	app: app,
	noCache: !(process.env.NODE_ENV !== "production")
});

app.use(function *() {
	this.render("index");
});

module.exports = app;