'use strict';
const angular = require('angular');

/*@ngInject*/
export function gameServiceService($q) {
	return{
    newGame: newGame,
    getGameInfo: getGameInfo
  };

  function newGame(player1, player2){
    var deferred = $q.defer();
    deferred.resolve({
      id: '1234'
    });

    return deferred.promise;
  }

  function getGameInfo() {
    var deferred = $q.defer();
    deferred.resolve({
      player1: 'pepe',
      player2: 'gato',
      scoreGame: ['pepe']
    });

    return deferred.promise;
  }
}

export default angular.module('uruitApp.gameService', [])
  .service('gameService', gameServiceService)
  .name;
