var app = app || {};

/**
 * エントリポイント
 */
(function(app) {
	// 起動処理クラスを実行する
	console.log("app.js start----");
	app.application = new app.A002Application();
	app.application.start();
	console.log("app.js end----");
})(app);
