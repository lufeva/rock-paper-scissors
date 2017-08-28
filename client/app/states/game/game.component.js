'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './game.routes';

export class GameComponent {
  counterTurn = 1;

  /*@ngInject*/
  constructor($state, $stateParams, $mdDialog, gameService, ruleService) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$mdDialog = $mdDialog;
    this.gameService = gameService;
    this.ruleService = ruleService;
  }

  $onInit() {
    this.gameID = this.$stateParams.game;
    this.ruleService.getmovesList().then(result => {
      this.movesList = result;
      this.selectedMove = '';
    });

    this.gameService.getGameInfo(this.gameID).then(result => {
      if(result.winner) {
        this.$state.go('game-over', { game: this.gameID });
        return;
      }
      this.player1 = {name: result.player1};
      this.player2 = {name: result.player2};
      this.scoreGame = result.rounds;
      this.roundNumber = this.scoreGame.length + 1;
      this.playerName = this.player1.name;
    });
  }

  playerPlays() {
    let playersMoves;
    let roundWinner;
    if(this.selectedMove != '') {
      if(this.playerName === this.player1.name) {
        this.playerName = this.player2.name;
        this.player1.move = this.selectedMove;
        this.selectedMove = '';
      } else {
        this.player2.move = this.selectedMove;
        if(this.player2.move !== this.player1.move) {
          playersMoves = {
            player1: this.player1,
            player2: this.player2
          };
          this.gameService.getRoundWinner(playersMoves).then(result => {
            roundWinner = result;
            this.finishRound(roundWinner);
          });
        } else {
          this.finishRound('');
        }
      }
    } else {
      let alert = this.$mdDialog.alert({
        title: 'Attention',
        textContent: 'You should select a move to play!',
        ok: 'Close'
      });
      this.showAlert(alert);
    }
  }

  finishRound(roundWinner) {
    this.gameService.updateGame(this.gameID, roundWinner).then(game => {
      this.gameService.calculateGameWinner(game.player1, game.player2, game.rounds, this.gameID).then(result => {
        if(result) {
          this.$state.go('game-over', { game: this.gameID });
        } else {
          this.$state.go('game', { game: this.gameID }, {reload: 'game'});
        }
      });
    });
  }

  showAlert(alertMesage) {
    this.$mdDialog.show(alertMesage);
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
