var app = app || {};

(function(app) {
	
	app.a002QuestionCollection = Backbone.Collection.extend({
		
		url : "/gateway.php?url=http://histudent-tsrv1.rhcloud.com/sample1/remote/fotune/execute/1/",
		
		initialize : function initialize() {
	        if (this.id) {
	            this.url = this.url + this.id;
	        }
	        else {
	        	this.url = this.url + "1";
	        }
	    },
	    
		model : app.A002QuestionModel,
		
		parse : function parse(response) {
			// 取得結果を解析
			console.log("モデルをパース");
			console.log(response.result_data);
			return response.result_data;
		},
	});
})(app);