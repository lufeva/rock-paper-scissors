/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/rules              ->  index
 * POST    /api/rules              ->  create
 * GET     /api/rules/:id          ->  show
 * PUT     /api/rules/:id          ->  upsert
 * PATCH   /api/rules/:id          ->  patch
 * DELETE  /api/rules/:id          ->  destroy
 */

'use strict';

import Rule from './rule.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Rules
export function index(req, res) {
  return Rule.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Rule from the DB
export function show(req, res) {
  return Rule.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Rule in the DB
export function create(req, res) {
  return Rule.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Rule in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    Reflect.deleteProperty(req.body, '_id');
  }
  return Rule.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Rule from the DB
export function destroy(req, res) {
  return Rule.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
