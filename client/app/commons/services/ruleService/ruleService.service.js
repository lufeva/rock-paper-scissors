'use strict';
const angular = require('angular');

/*@ngInject*/
export function ruleService($q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return {
    getmovesList,
    getRules
  };

  function getmovesList() {
    var deferred = $q.defer();
    deferred.resolve([
      'paper', 'scissors', 'rock'
    ]);

    return deferred.promise;
  }

  function getRules() {
    var deferred = $q.defer();
    deferred.resolve([
      { move: 'paper', kills: 'rock'},
      { move: 'rock', kills: 'scissors'},
      { move: 'scissors', kills: 'paper'}
    ]);

    return deferred.promise;
  }
}

export default angular.module('uruitApp.ruleService', [])
  .service('ruleService', ruleService)
  .name;
