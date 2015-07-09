var app = app || {};

//開始
(function(app) {
	console.log("app.js start----");
	app.application = new app.Application();
	app.application.start();
	console.log("app.js end----");
})(app);
