var app = app || {};

// レイアウト２用モデル
(function(app) {
	app.A002QuestionModel = Backbone.Model.extend({
	    
	    url : "/gateway.php?url=http://histudent-tsrv1.rhcloud.com/sample1/remote/fotune/execute/1/",
	    
	    parse : function parse(response) {
			// 取得結果を解析
			console.log("モデルをパース");
			console.log(response.result_data);
			return response.result_data;
		},
		
	    //parse : function(response) {
		//	//モデルをパース
		//	console.log("モデルをパース");
		//	console.log(response);
		//	return response.result_data;
		//},
		
		defaults : function () {
			return {
				select_1_text : 'ああ',
				select_2_text : 'いい'
			}
		},
		//defaults : function (){
		//	return {
        //       'result_data' : {
        //            'select_1_next_no' : null,
        //            'select_1_next_no' : null,
        //            'select_1_text' : "",
        //            'select_2_text' : "",
        //        }
       //     };
	//	}
	});
})(app);
