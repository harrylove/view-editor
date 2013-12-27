Template.test.text = function() {

    var view = [];

    //var link = Template['a'].withData({ id:'id', className:'class', href:'#', text:'my text' });
    var link = Template['a']({ id:'id', class:'class', href:'#', text:'my text' });

    view.push(link);

    return view;
};
