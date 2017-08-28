'use strict';
const angular = require('angular');

/*@ngInject*/
export function ruleService($q, $http, apiRule) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return {
    getmovesList,
    getRules,
    updateRules,
    addNewRule
  };

  function getmovesList() {
    /*
      'paper', 'scissors', 'rock'
    */
    return getRules().then(result => result.map(rule => rule.move));
  }

  function getRules() {
    /*
      { move: 'paper', kills: 'rock'},
      { move: 'rock', kills: 'scissors'},
      { move: 'scissors', kills: 'paper'}
    ]);*/
    return $http({
      method: 'GET',
      url: `${apiRule}`
    }).then(rule => rule.data);
  }

  function updateRules(ruleID, kills) {
    return $http({
      method: 'PUT',
      url: `${apiRule}${ruleID}`,
      data: {kills}
    }).then(game => game.data);
  }

  function addNewRule(move, kills) {
    return $http({
      method: 'POST',
      url: `${apiRule}`,
      data: { move, kills }
    }).then(rule => rule.data);
  }
}

export default angular.module('uruitApp.ruleService', [])
  .service('ruleService', ruleService)
  .name;
