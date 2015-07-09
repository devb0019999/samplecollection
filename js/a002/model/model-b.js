var app = app || {};

// レイアウト２用モデル
(function(app) {
	app.A002QuestionModel = Backbone.Model.extend({
	    
	    //parse : function(response) {
		//	//モデルをパース
		//	console.log("モデルをパース");
		//	console.log(response);
		//	return response.result_data;
		//},
		
		defaults : {
			select_1_text : 'ああ',
			select_2_text : 'いい'
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
