'use strict';

app.controller('ListCtrl',
  ['$scope','$firebase','lists',
  function($scope, $firebase, $lists) {

    $scope.lists = $lists;

    $scope.addList = function() {
      var name = $scope.listName.trim();
      var desc = $scope.listDesc.trim();
      if (!name.length) {
        return;
      }

      var list = { name: name, desc: desc };

      $scope.lists.$add(list);

      $scope.listName = '';
      $scope.listDesc = '';
    };

    $scope.removeList = function(id) {
      $scope.list.$remove(id);
    };

    $scope.editList = function(id) {
      var list = $scope.lists[id];
      var text = list.name.trim();

      var newName = window.prompt('List name: ', text);
      if (!newName || !newName.length)
        return;

      list.name = newName;
      $scope.lists.$save(id);
    };

}]);