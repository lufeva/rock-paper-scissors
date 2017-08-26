'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './game.routes';

export class GameComponent {
  counterTurn = 1;

  /*@ngInject*/
  constructor($state, $stateParams, gameService, ruleService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.gameService = gameService;
    this.ruleService = ruleService;
  }

  $onInit() {
    this.gameID = this.$stateParams.gameID;
    this.ruleService.getmovesList().then(result => {
      this.movesList = result;
      this.selectedMove = '';
    });

    this.gameService.getGameInfo(this.gameID).then(result => {
      this.player1 = result.player1;
      this.player2 = result.player2;
      this.scoreGame = result.scoreGame;
    });
  }


}

export default angular.module('uruitApp.game', [uiRouter])
  .config(routes)
  .component('game', {
    template: require('./game.html'),
    controller: GameComponent,
    controllerAs: 'gameCtrl'
  })
  .name;
