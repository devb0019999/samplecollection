var app = app || {};

//controller
(function(app) {
	app.A002Controller = Backbone.Marionette.Controller.extend({

		/**
		 * 初期表示
		 */
		initShow : function() {
			this.showView(app.A002LayoutView);
		},
		
		/**
		 * ページ表示
		 */
		showView : function(view, option) {
			app.application.mainRegion.show(new view(option));
		},
		
		/**
		 * レイアウト切り替え
		 */
		nextSelect : function(){
			this.showView(app.A002QuestionLayoutView);
		}
	});
})(app);
