'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('game', {
      url: '/game/:game',
      template: '<game></game>'
    });
}
