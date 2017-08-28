'use strict';

import GameComponent from './game.component';

fdescribe('Component: GameComponent', function() {
 // load the controller's module
 beforeEach(angular.mock.module('uruitApp.game'));

 var GameComponent, stateMock, stateParamsMock, $mdDialogMock, gameServiceMock, ruleServiceMock, rootScope;

 // Initialize the controller and a mock scope
 beforeEach(inject(function($componentController, $q, $rootScope) {

  stateMock = {
    go: function() {},
    current: {
      name: 'mock'
    }
  };

  stateParamsMock = {
    game: {}
  };
  rootScope = $rootScope;

  gameServiceMock = {
    getRoundWinner: function() {
      return $q.resolve({});
    },
    getGameInfo: function() {
      return $q.resolve({
        player1: 'Juan',
        player2: 'Pedro',
        rounds: []
      });
    },
    updateGame: function() {
      return $q.resolve({});
    },
    calculateGameWinner: function() {
      return $q.resolve({});
    }
  };

  ruleServiceMock = {
    getmovesList: function() {
      return $q.resolve({});
    }
  };

  $mdDialogMock = {
    alert: function() {
      return $q.when();
    }
  }

  GameComponent = $componentController('game', {
     $state: stateMock,
     $stateParams: stateParamsMock,
     $mdDialog: $mdDialogMock,
     gameService: gameServiceMock,
     ruleService: ruleServiceMock 
  });
  
 }));

 describe('GameComponent.$onInit()', function () {
   it('should work', function() {
    spyOn(gameServiceMock, 'getGameInfo').and.callThrough();
    spyOn(ruleServiceMock, 'getmovesList').and.callThrough();
    GameComponent.$onInit();
    rootScope.$apply();
    expect(gameServiceMock.getGameInfo).toHaveBeenCalled();
    expect(ruleServiceMock.getmovesList).toHaveBeenCalled();
   });
 });

 describe('GameComponent.playerPlays', function () {
   it('should call gameService.getRoundWinner when player1 and player2 have made their moves', function() {
    spyOn(gameServiceMock, 'getRoundWinner').and.callThrough();
    GameComponent.player1 = {
      name: 'mockName',
      move: 'mockMove'
    };
    GameComponent.player2 = {
      name: 'mockName',
      move: 'mockMove'
    };
    GameComponent.playerPlays();
    rootScope.$apply();
    expect(gameServiceMock.getRoundWinner).toHaveBeenCalled();
   });
 });
});
