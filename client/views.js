Meteor.subscribe('views');

Template.view_form.rendered = function() {
    $('.sortable').sortable({
	update: function(e, ui) {
            var items = _.map($(this).children(), function(item) {
		return item.innerText;
	    });
	    Views.update(Session.get('activeView'), { $set: { items: items }});
	}
    });
};

Template.view_form.items = function() {
    var view = Views.findOne();
    if (view) {
	Session.set('activeView', view._id);
	return view.items;
    }

};
