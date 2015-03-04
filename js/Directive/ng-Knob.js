
angular.module('ng-Knob',[])
.directive('ngKnob',['$timeout',function($timeout){
		return {
			restrict:'E',
		    require: 'ngModel',
			scope :{
				id: '@',
				value : '=ngModel'
			}	,	
			link:function(scope,element,attr,cntrl){
				debugger;
				var tmplt= '<input type="text"  value='+scope.value+' id="'+scope.id+'i" >';
				var _knob = jQuery(tmplt)
						   .appendTo(element)
						   .knob({
                           'min':0,
                           'max':100,
                           'step':1,
                           'release':function(v){
                           	   scope.value=v;
                                   scope.$apply();
                           }
                           });      
                 //$('#hh').val(scope.value).trigger('change');
                $timeout(function () {
			    scope.$watch('value', function (updatedValue) {
                      if (updatedValue !== undefined) {
                        $('#'+scope.id+'i').val(updatedValue).trigger('change');
                   }
                }, true);});
			
			}
		}
	}]) ;