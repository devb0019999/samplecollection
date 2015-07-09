var app = app || {};

//controller
(function(app) {
	app.TodoController = Backbone.Marionette.Controller.extend({

		todoLists : function() {
			//Todoレイアウト用ビューにルーティング
			new app.TodoLayoutView();
			console.log(app.TodoLayoutView);
			this.nextView(app.TodoLayoutView);
		},

		todoDetail : function(id) {
			this.nextView(app.TodoDetailLayoutView, {modelId : id});
		},

		nextView : function(view, option) {
			app.application.mainRegion.show(new view(option));
		},

	});
})(app);
