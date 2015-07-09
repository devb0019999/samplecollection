var app = app || {};

(function(app) {
	
	app.FotuneCollection = Backbone.Collection.extend({
		
		model : app.A002Model,
		
		url : "/gateway.php?url=http://histudent-tsrv1.rhcloud.com/sample1/remote/fotune/execute/1/1",
		
		parse : function(response) {
			// 取得結果を解析
			console.log("モデルをパース");
			console.log(response);
			return response;
		},
	});
})(app);