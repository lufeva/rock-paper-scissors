'use strict';
const angular = require('angular');

/*@ngInject*/
export function ruleService($q) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return{
    init: init,
    getmovesList: getmovesList
  };

  function init(){
    var deferred = $q.defer();

    setTimeout(function() {
      deferred.resolve('About to greet ');
    }, 1000);

    return deferred.promise;
  }

  function getmovesList() {
    var deferred = $q.defer();
    deferred.resolve([
      'paper', 'scisors', 'stone' 
    ]);

    return deferred.promise;
  }

}

export default angular.module('uruitApp.ruleService', [])
  .service('ruleService', ruleService)
  .name;
