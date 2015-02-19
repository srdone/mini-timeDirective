angular.module('miniTimeDirective').directive('showTime', function () {

  return {
    restrict: 'E',
    template: '<div>The current time is {{time}} </div>',
    link: function ($scope, $element, $attributes) {
      var currentTime = new Date();
      $scope.time = currentTime.toString();
    }
  };

});