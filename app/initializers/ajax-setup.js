export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  $( document ).ajaxSuccess(function( event, jqxhr, settings ) {
  	// var eventStr = JSON.stringify(event);
  	// var jqxhrStr = JSON.stringify(jqxhr);
  	// var settingsStr = JSON.stringify(settings);
    if (settings && settings.type && settings.type !== 'GET') {
      var stuff = settings.type + ' ' + settings.url;
      // console.log();
    	$('.log').text(stuff);
    } 
  });
}

export default {
  name: 'ajax-setup',
  initialize
};
