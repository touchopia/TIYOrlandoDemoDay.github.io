'use strict';

angular.module('tiyorlandoDemoDaygithubio', ['ngTouch', 'ngSanitize', 'ui.bootstrap', 'ui.router' ])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
      })
      .state('fall2015', {
        url: '/fall',
        templateUrl: 'app/graduates/fall2015.html',
      })

    $urlRouterProvider.otherwise('/');
  });
