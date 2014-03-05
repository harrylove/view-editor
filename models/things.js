Things = new Meteor.Collection('things');

Things.allow({
    insert: function (userId, doc) {
        //return (userId && doc.userId === userId);
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        //return doc.userId === userId;
        return true;
    },
    remove: function (userId, doc) {
        //return false;
        return true;
    },
    //fetch: ['userId']
});
