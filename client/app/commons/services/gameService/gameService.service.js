'use strict';
const angular = require('angular');

/*@ngInject*/
export function gameServiceService($q, $http, apiGame, ruleService, roundsToWin) {
  return {
    newGame,
    getGameInfo,
    updateGame,
    getRoundWinner,
    calculateGameWinner,
    getGames
  };

  function newGame(player1, player2) {
    return $http({
      method: 'POST',
      url: `${apiGame}`,
      data: { player1, player2 }
    }).then(game => game.data);
  }

  function getGameInfo(id) {
    /*type of the response({
      player1: 'pepe',
      player2: 'gato',
      scoreGame: ['pepe', '', 'gato']
    });
    */
    return $http({
      method: 'GET',
      url: `${apiGame}${id}`,
    }).then(game => game.data);
  }

  function getRoundWinner(game) {
    return ruleService.getRules().then(result => {
      let ruleSet = result;

      for(let rule of ruleSet) {
        if(rule.move === game.player1.move && rule.kills === game.player2.move) {
          return $q.when(game.player1.name);
        } else if(rule.move === game.player2.move && rule.kills === game.player1.move) {
          return $q.when(game.player2.name);
        }
      }
      return $q.when('');
    });
  }

  function updateGame(gameID, roundWinner) {
    return $http({
      method: 'PUT',
      url: `${apiGame}winner/${gameID}`,
      data: {winner: roundWinner}
    }).then(game => game.data);
  }

  function updateWinner(gameID, player) {
    return $http({
      method: 'PUT',
      url: `${apiGame}update/${gameID}`,
      data: { winner: player }
    }).then(game => game.data);
  }

  function calculateGameWinner(player1, player2, rounds, gameID) {
    if(rounds.filter(value => player1 === value).length === roundsToWin) {
      return updateWinner(gameID, player1);
    } else if(rounds.filter(value => player2 === value).length === roundsToWin) {
      return updateWinner(gameID, player2);
    } else {
      return $q.when(null);
    }
  }

  function getGames() {
    return $http({
      method: 'GET',
      url: `${apiGame}`,
    }).then(game => game.data);
  }
}

export default angular.module('uruitApp.gameService', [])
  .service('gameService', gameServiceService)
  .name;
