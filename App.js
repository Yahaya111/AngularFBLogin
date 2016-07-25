(function() {

  'use strict';

  angular
    .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
    .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

      authProvider.init({
        domain: 'yahaya111.auth0.com',
        clientID: 'vpxavBzZH04rN7IMNw8WIRJpRCncAj36',
      });
    });
})();