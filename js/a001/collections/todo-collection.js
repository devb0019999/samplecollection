var app = app || {};

//Todo一覧表示用コレクション
(function(app) {
	app.TodoCollection = Backbone.Collection.extend({
		url : '/gateway.php?url=http://histudent-tsrv1.rhcloud.com/sample1/remote/a001/execute/123/',
		model : app.TodoModel,

		parse : function(response) {
			//コレクションをパース
			console.log("コレクションをパース");
			return response;
		}
	});
})(app);