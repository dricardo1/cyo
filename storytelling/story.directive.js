define(['app','underscore','css!global/styles.css'] , function (app, _) {
	app.directive('story', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      replace:false,
      template:function(elem, atts){

      	return "<chapter " + _.dasherize(atts.first) + " />";

      },
     controller: function ($scope, $attrs, $element) {
     		console.log("Story controller bootezd...");

     		this.nextChapter = function(page) {
     			console.log("Going to next chapter...",page);
     			var el = angular.element("<chapter url='" + page + "'></chapter>");
     			var cmpl = $compile(el)
          $element.append(el);
          cmpl($scope);

 //         $('html, body').animate({scrollTop: el.offset().top}, 2200);
     		}
      
      },
    }
  }]);
})