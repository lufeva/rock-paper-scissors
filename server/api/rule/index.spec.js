'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var ruleCtrlStub = {
  index: 'ruleCtrl.index',
  show: 'ruleCtrl.show',
  create: 'ruleCtrl.create',
  upsert: 'ruleCtrl.upsert',
  destroy: 'ruleCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ruleIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './rule.controller': ruleCtrlStub
});

describe('Rule API Router:', function() {
  it('should return an express router instance', function() {
    ruleIndex.should.equal(routerStub);
  });

  describe('GET /api/rules', function() {
    it('should route to rule.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ruleCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/rules/:id', function() {
    it('should route to rule.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ruleCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/rules', function() {
    it('should route to rule.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ruleCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/rules/:id', function() {
    it('should route to rule.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'ruleCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/rules/:id', function() {
    it('should route to rule.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ruleCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
