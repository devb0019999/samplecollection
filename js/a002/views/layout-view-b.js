var app = app || {};

//レイアウト２用レイアウトビュー
(function(app) {
	app.A002QuestionLayoutView = Backbone.Marionette.LayoutView.extend({
		
		//テンプレート
		template: '#a002-question-layout-template',

		regions : {
			a002Region : '#a002-question-layout-template-inner-contents',
		},

		onRender : function(){
			console.log("A002QuestionLayoutView#onRender start");
			this.showContents();
			console.log("A002QuestionLayoutView#onRender end");
		},
        
		showContents : function(){
        	this.a002Region.show(new app.A002QuestionItemView());
        },
		
	});
})(app);