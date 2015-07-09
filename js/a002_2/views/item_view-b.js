var app = app || {};

//レイアウト２用アイテムビュー
(function(app) {
	app.A002QuestionItemView = Backbone.Marionette.ItemView.extend({
		//テンプレート
		template: '#a002-question-item-template',
		
		// 選択ボタン1、2
		ui : {
			select_1 : '#select_1',
			select_2 : '#select_2',
		},
		
		// 選択ボタン1、2クリックイベントを登録
		events : {
            'click @ui.select_1' : 'select_1',
            'click @ui.select_2' : 'select_2',
        },
        
        // 選択メッセージデータ
        model : new app.A002QuestionModel(),

        // 表示処理
		onRender : function(){
			console.log("A002QuestionItemView#onRender start");
			//var collection = new app.a002QuestionCollection();
			//collection.fetch({
			//	success : function success(collection, res, options) {
			//        // 通信成功時の処理
			//        console.log(res);
			//    },
			//    error : function error(res) {
			//        // 通信失敗時の処理
			//        console.log("通信エラー");
			//        if (res.error){
			//        	console.log(res.error.message);
			//        }
			//        console.log(res);
			//    }
			//
			//});
			
			var collectionView = new app.FotuneCollectionView({
				collection: new Backbone.Collection([
					{select_1_text: 'あか', select_2_text: 'あお'},
				])
			});
			console.log("A002QuestionItemView#onRender end");
		},
	    
		/**
		 * 選択肢1選択処理
		 */
		select_1 : function () {
	    	alert("select_1！！");
	    },
	    
	    /**
	     * 選択肢2選択処理
	     */
	    select_2 : function () {
	    	alert("select_2！！");
	    },

	});
})(app);
