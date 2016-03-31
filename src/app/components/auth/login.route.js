(function() {
  'use strict';

  angular
    .module('glass.auth')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('home.login', {
        template: '<glass-login flex></glass-login>'
      });
      
  }

})();
