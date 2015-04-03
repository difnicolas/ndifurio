angular.module('app')
  .controller('BioCtrl', function ($scope, employee) {
    employee.query(function(data) {
        $scope.employees = data;
    });
  });