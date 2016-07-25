(function() {

  'use strict';

  angular.module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'yahaya111.auth0.com',
        clientID: 'vpxavBzZH04rN7IMNw8WIRJpRCncAj36',
      });
      
      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'Components/home/Home.html'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'Components/profile/Profile.html',
          controller: 'profileController as user'
        });

      jwtInterceptorProvider.tokenGetter = function(store) {
        return store.get('token');
      }

      $httpProvider.interceptors.push('jwtInterceptor');
      
    });
})();