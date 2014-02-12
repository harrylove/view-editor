Views.allow({
    insert: function (userId, doc) {
	return (userId && doc.userId === userId);
    },
    update: function (userId, doc, fields, modifier) {
	return doc.userId === userId;
    },
    remove: function (userId, doc) {
	return false;
    },
    fetch: ['userId']
});

var theLink = {
    tmpl: 'a',
    id: 'theLink',
    className: 'linkClass',
    href: '#',
    text: 'my text'
};

var thePara = {
    tmpl: 'p',
    text: {
	templates: [
            {
                tmpl: 'a',
                text: 'hi there',
            },
            {
		tmpl: 'span',
		text: ' '
	    },
            {
                tmpl: 'span',
                text: 'okay there my span'
            }
        ]
    }
};

var theOtherPara = {
    tmpl: 'p',
    text: 'another paragraph goes here'
};

var view = {
    name: 'testView',
    templates: [theLink, thePara, theOtherPara]
};

Meteor.startup(function() {
    if (Views.find().count() == 0) {
	Views.insert(view);
    }
});
