(function() {
  'use strict';

  angular
    .module('glass')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        data: { authenticate: true }
      })
      .state('main.login', {
        template: '<glass-login flex></glass-login>'
      })
      .state('main.admin', {
        url: 'admin',
        templateUrl: 'app/components/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        data: { authenticate: true }
      })
      .state('main.search', {
        url: 'search',
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search',
        data: { authenticate: true }
      })
      .state('main.about', {
        url: 'about',
        templateUrl: 'app/components/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
        data: { authenticate: true }
      });

  }

})();
