Template.test.text = function() {

    var view = [
	Template.a({ id:'id', class:'class', href:'#', text:'my text' }),
	Template.p({ text: [
		     Template.a({ text: 'hi there' }),
		     ' ',
	    Template.span({ text: 'okay' })].join('')
		   }),
	Template.p({ text: 'another paragraph' })
    ].join('');

    return view;
};
