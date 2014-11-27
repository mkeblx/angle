// app
'use strict';

var url = 'https://angle-pm.firebaseio.com';

angular.module('angleApp', [
    'angleApp.config',
    'angleApp.controllers',
    'angleApp.routes',
    'angleApp.services'
  ]);

angular.module('angleApp.config', [])
  .constant('FBURL', 'https://angle-pm.firebaseio.com')
  .constant('COLORS', [
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

/*app.slugify = function(str) {
  var s =
    str.toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-');
  return s;
}*/
angular.module('angleApp.routes', ['ngRoute'])
  .config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
      $routeProvider
        .when('/projects', {
          templateUrl: 'partials/projects.html',
          controller: 'ProjectCtrl'
        })
        .when('/projects/:id', {
          templateUrl: 'partials/project.html',
          controller: 'ProjectViewCtrl'
        })
        .when('/todos', {
          templateUrl: 'partials/todos.html',
          controller: 'TodoCtrl'
        })
        .when('/lists', {
          templateUrl: 'partials/lists.html',
          controller: 'ListCtrl'
        })
        .otherwise({
          redirectTo: '/projects'
        });

        $locationProvider.html5Mode(true);
    }]);


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

