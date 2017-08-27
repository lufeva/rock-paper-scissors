'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('game-over', {
      url: '/game-over/:game',
      template: '<game-over></game-over>'
    });
}
