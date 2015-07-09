var app = app || {};

(function(app) {
	
	app.FotuneCollectionView = Marionette.CollectionView.extend({
		
		el: '#fooList',
		
		itemView: app.A002QuestionItemView
    
	});
})(app);