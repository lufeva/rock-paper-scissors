'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './rule-config.routes';

export class RuleConfigComponent {

  /*@ngInject*/
  constructor(ruleService) {
    this.ruleService = ruleService;
  }

  $onInit() {
    this.ruleService.getRules().then(result => {
      this.ruleList = result;
    });

    this.ruleService.getmovesList().then(result => {
      this.movesList = result;
    });
  }

  listFilter(move, kills) {
    console.log(move);
    return move !== kills;
  }
}

export default angular.module('uruitApp.rule-config', [uiRouter])
  .config(routes)
  .component('ruleConfig', {
    template: require('./rule-config.html'),
    controller: RuleConfigComponent,
    controllerAs: 'ruleConfigCtrl'
  })
  .name;
