requirejs.config({
   paths: {
   	 jquery: 'vendors/jquery/jquery.min',
   	 domReady: 'modules/helpers/domready',
   	 text: 'modules/helpers/text',
     underscore: 'vendors/underscore/underscore-min',
     routes: 'modules/routes'
  }
});

require([
	'!domReady',
	'jquery',
	'section'
	], function(domReady, $, section) {
		$('html').removeClass('no-js').addClass('js');
	}
);