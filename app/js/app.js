/**
 * Created by shenzq on 9/27/13.
 */

var fcModule = angular.module('food2cube', ['ngResource', 'ngRoute']);

fcModule.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.isLogined = false;
  }]
);

fcModule.controller('LoginCtrl', ['$scope', 'UserProfile',
  function($scope, UserProfile) {
    $scope.doLogin = function() {
      $scope.user = {};
      $scope.doLogin = function() {
        $http({
          method : 'POST',
          url : '/api/login',
          data : $scope.user
        });
      };
    }
  }]
);

fcModule.factory('UserProfile', [function (reutrn) {
  var up = {
    isLoggedIn: false,
    username: '',
    login: function(username, password) {

    }
  };

  return up;
}]);

/*
function pageRouteConfig($routeProvider) {
  $routeProvider.
    when('/', {
      controller: HomeController,
      templateUrl: 'home.html'
    }).
    when('/company/:companyName', {
      controller: CompanyController,
      templateUrl: 'company.html'
    }).
    when('/order/', {
      contorller: OrderCtrl,
      templateUrl: 'order.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}
*/
