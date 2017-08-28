'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './rule-config.routes';

export class RuleConfigComponent {

  addNewRule = false;
  newRule = {};

  /*@ngInject*/
  constructor($mdDialog, ruleService) {
    this.ruleService = ruleService;
    this.$mdDialog = $mdDialog;
  }

  $onInit() {
    this.ruleService.getRules().then(result => {
      this.ruleList = result;
    });

    this.ruleService.getmovesList().then(result => {
      this.movesList = result;
    });
  }

  updateRule(ruleID, kills) {
    this.ruleService.updateRules(ruleID, kills).then(() => {
      let alert = this.$mdDialog.alert({
        title: 'Attention',
        textContent: 'Rules have been updated',
        ok: 'Close'
      });
      this.showAlert(alert);
    });
  }

  showAlert(alertMesage) {
    this.$mdDialog.show(alertMesage);
  }

  addRule() {
    this.ruleService.addNewRule(this.newRule.move, this.newRule.kills).then(() => {
      let alert = this.$mdDialog.alert({
        title: 'Attention',
        textContent: 'New rule added succesfully!',
        ok: 'Close'
      });
      this.showAlert(alert);
      this.newRule = {};
      this.addNewRule = false;
    });
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
