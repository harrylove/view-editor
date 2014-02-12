/* TODO
   * Why isn't the new P tag rendered?
 * Recursive view rendering with underscore
 * store views which are a combo of several templates joined in an array
   * Have an "active" view using Session
   * Change the session to update the view being rendered
   * Apply the data model to the view
   * Make sure the view can be built using whatever data is available about the model being rendered
   * What are some standard Model attributes that can be used across all views
   * Include this meteor app inside the other meteor app
   */

var renderTemplate = function(memo, template) {
    var output;
    if (_.isObject(template.text)) {
	template.text = renderTemplates(template.text);
    }
    return memo + Template[template['tmpl']](template);
};

var renderTemplates = function(view) {
    return _.reduce(view.templates, renderTemplate, '');
};

Template.test.text = function() {
    var view = Views.findOne({name:'testView'});
    if (! _.isUndefined(view)) {
	return renderTemplates(view);
    }
};
