var app = app || {};

/**
 * 起動処理クラス
 */
(function(app) {
	app.A002Application = Backbone.Marionette.Application.extend({
		
		/**
		 * 初期処理
		 */
		initialize : function(){
			new app.A002Router();
		},

		/**
		 * ？
		 */
		onStart : function(){
			Backbone.history.start();
		},

		// メイン表示エリアの定義
		regions : {
			mainRegion : '#main_contents'
		}

	});
})(app);

