var app = app || {};

//router
(function(app) {
	app.A002Router = Backbone.Marionette.AppRouter.extend({
		
		//コントローラをインスタンス化
		controller: new app.A002Controller(),
		
		//ルーティング設定 イベントに対するコントローラのマッピング
		/**
		 * URLとコントローラの紐づけ
		 */
		appRoutes : {
			// 初回
			'' 					: 'initShow',
			// 次回以降
			'nextSelect'		: 'nextSelect',
		},
	});
})(app);
