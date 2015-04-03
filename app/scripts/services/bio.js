angular.module('app')
  .factory('employee', function ($resource) {
    return $resource("http://private-ea5f0-employbios.apiary-mock.com/employees/:id");
  });