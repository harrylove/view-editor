Meteor.publish('views', function() {
    return Views.find();
});
