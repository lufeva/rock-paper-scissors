'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './home.routes';

export class HomeComponent {

  /*@ngInject*/
  constructor($state, $stateParams, gameService) {
    this.$state = $state;
    //this.$stateParams = $stateParams;
    this.gameService = gameService;
  }

  $onInit() {
    this.player1 = '';
    this.player2 = '';
  }
  createGame() {
    this.gameService.newGame(this.player1.toUpperCase(), this.player2.toUpperCase()).then(result => {
      this.$state.go('game', { game: result._id });
    });
  }

}

export default angular.module('uruitApp.home', [uiRouter])
  .config(routes)
  .component('home', {
    template: require('./home.html'),
    controller: HomeComponent,
    controllerAs: 'homeCtrl'
  })
  .name;
