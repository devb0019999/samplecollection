var app = app || {};

//レイアウト１用レイアウトビュー
(function(app) {
	app.A002LayoutView = Backbone.Marionette.LayoutView.extend({
		
		//テンプレート
		template: '#a002-layout-template',

		regions : {
			a002Region : '#a002-inner-contents',
		},

		onRender : function(){
			console.log("A002LayoutView#onRender start");
			this.showStartContents();
			console.log("A002LayoutView#onRender end");
		},
        
        showStartContents : function(){
        	this.a002Region.show(new app.A002ItemView());
        },
		
	});
})(app);
