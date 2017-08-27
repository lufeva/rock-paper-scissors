'use strict';

describe('Component: GameOverComponent', function() {
  // load the controller's module
  beforeEach(module('uruitApp.game-over'));

  var GameOverComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    GameOverComponent = $componentController('game-over', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
