(function () {
  'use strict';

  angular
    .module('angularTest')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$log'];

  function HomeController($log) {
    var vm = this;
    vm.onLogin = function () {
      $log.info('login button click');
    }
  }
})();
