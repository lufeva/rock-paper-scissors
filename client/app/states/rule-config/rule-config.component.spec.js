'use strict';

describe('Component: RuleConfigComponent', function() {
  // load the controller's module
  beforeEach(module('uruitApp.rule-config'));

  var RuleConfigComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    RuleConfigComponent = $componentController('rule-config', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
