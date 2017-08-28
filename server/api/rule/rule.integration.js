'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newRule;

describe('Rule API:', function() {
  describe('GET /api/rules', function() {
    var rules;

    beforeEach(function(done) {
      request(app)
        .get('/api/rules')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rules = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      rules.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/rules', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/rules')
        .send({
          kills: 'rock'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newRule = res.body;
          done();
        });
    });

    it('should respond with the newly created rule', function() {
      newRule.kills.should.equal('rock');
    });
  });

  describe('GET /api/rules/:id', function() {
    var rule;

    beforeEach(function(done) {
      request(app)
        .get(`/api/rules/${newRule._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          rule = res.body;
          done();
        });
    });

    afterEach(function() {
      rule = {};
    });

    it('should respond with the requested rule', function() {
      rule.kills.should.equal('rock');
    });
  });

  describe('PUT /api/rules/:id', function() {
    var updatedRule;

    beforeEach(function(done) {
      request(app)
        .put(`/api/rules/${newRule._id}`)
        .send({
          kills: 'paper'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedRule = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRule = {};
    });

    it('should respond with the updated rule', function() {
      updatedRule.kills.should.equal('paper');
    });

    it('should respond with the updated rule on a subsequent GET', function(done) {
      request(app)
        .get(`/api/rules/${newRule._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let rule = res.body;

          rule.kills.should.equal('paper');

          done();
        });
    });
  });

  describe('DELETE /api/rules/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/rules/${newRule._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when rule does not exist', function(done) {
      request(app)
        .delete(`/api/rules/${newRule._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
