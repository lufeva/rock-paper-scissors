'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './toplist.routes';

export class ToplistComponent {
  /*@ngInject*/
  constructor(gameService) {
    this.gameService = gameService;
  }

  $onInit() {
    this.gameService.getGames().then(result => {
      this.topScores = result;
    });
  }
}

export default angular.module('uruitApp.toplist', [uiRouter])
  .config(routes)
  .component('toplist', {
    template: require('./toplist.html'),
    controller: ToplistComponent,
    controllerAs: 'toplistCtrl'
  })
  .name;
