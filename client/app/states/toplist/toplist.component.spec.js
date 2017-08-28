'use strict';

describe('Component: ToplistComponent', function() {
  // load the controller's module
  beforeEach(module('uruitApp.toplist'));

  var ToplistComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ToplistComponent = $componentController('toplist', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
