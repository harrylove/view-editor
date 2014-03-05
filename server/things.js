Meteor.publish('things', function() {
    return Things.find();
});

/*
Meteor.startup(function() {
    if (Things.find().count() == 0) {
	_.each(things, function(thing) {
	    Things.insert(thing);
	});
    }
});
*/
