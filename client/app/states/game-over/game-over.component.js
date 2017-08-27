'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './game-over.routes';

export class GameOverComponent {
  /*@ngInject*/
  constructor($state, $stateParams, gameService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.gameService = gameService;
  }

  $onInit() {
    this.gameService.getGameInfo(this.$stateParams.game).then(result => {
      if(!result.winner) {
        this.$state.go('home');
      }
      this.winnerPlayer = result.winner;
    });
  }

  newGame() {
    this.$state.go('home');
  }
}

export default angular.module('uruitApp.game-over', [uiRouter])
  .config(routes)
  .component('gameOver', {
    template: require('./game-over.html'),
    controller: GameOverComponent,
    controllerAs: 'gameOverCtrl'
  })
  .name;
