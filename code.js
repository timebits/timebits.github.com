$(function() {

		var Person = Backbone.Model.extend({
			initialize : function() {
				// Put the logic that you need to be created on Person creation.
			},
			defaults : {
				name : "BACKBONE",
				email : "emal@backbone.com",
			}
		});

		var p = new Person;

		var ContactView = Backbone.View.extend({
			  model : p,
			  el: 'div',
			  template: _.template($("#template-person").html()),
			  render: function() {
			    var dict = this.model.toJSON();
			    var html = this.template(dict);
			    $(this.el).append(html);
			  }
			});
		
		var cv = new ContactView;
		cv.render();

});
