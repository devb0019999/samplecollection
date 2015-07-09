var app = app || {};

//レイアウト１用アイテムビュー
(function(app) {
	app.A002ItemView = Backbone.Marionette.ItemView.extend({
		//テンプレート
		template: '#a002-item-template',
		
		// 開始ボタン
		ui : {
			start : '#start',
		},
		
		// 開始ボタンのクリックイベントを登録
		events : {
            'click @ui.start' : 'start',
        },

        /**
         * 表示処理（自動的に呼ばれる）
         */
		onRender : function(){
			console.log("A002ItemView#onRender start");
			console.log("A002ItemView#onRender end");
		},
	    
		/**
		 * 開始ボタンクリック時処理
		 */
	    start : function () {
	    	console.log("---start---");
	    	// ここは微妙
	    	// レイアウト切り替え
	    	var router = new app.A002Router();
	    	router.navigate("#nextSelect", {trigger:true});
	    },
	});
})(app);
