'use strict';

angular
  .module('letsboxeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/horarios', {
        templateUrl: 'views/horarios.html',
        controller: 'HorariosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
