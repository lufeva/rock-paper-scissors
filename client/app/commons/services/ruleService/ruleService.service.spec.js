'use strict';

describe('Service: ruleService', function() {
  // load the service's module
  beforeEach(module('uruitApp.ruleService'));

  // instantiate service
  var ruleService;
  beforeEach(inject(function(_ruleService_) {
    ruleService = _ruleService_;
  }));

  it('should do something', function() {
    expect(!!ruleService).toBe(true);
  });
});
