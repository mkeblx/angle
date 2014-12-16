// app
'use strict';

angular.module('angleApp', [
    'angleApp.config',
    'angleApp.filters',
    'angleApp.controllers',
    'angleApp.routes',
    'angleApp.services',
    'angleApp.directives'
  ]);

angular.module('angleApp.config', [])
  .constant('FBURL', 'https://angle-pm.firebaseio.com')
  .constant('COLORS',
    [
      '#805056',
      '#F16522',
      '#FCBD54',
      '#8DC63E',
      '#84C780',
      '#298ACA',
      '#8772A5',
      '#F072AB',
      '#E44044'
    ]);

/*app.directive('packery', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.element = element;
        $rootScope.packery = new Packery(element[0], {
          gutter: 10,
          itemSelector: '.proj'
        });
        $rootScope.packery.bindResize();

        var orderItems = function() {
          var itemElems = $rootScope.packery.getItemElements();
        };

        $rootScope.packery.on('layoutComplete', orderItems);

        $timeout(function() {
          $rootScope.packery.reloadItems();
          $rootScope.packery.layout();
        }, 1000);
      }
    };

  }
]);*/

