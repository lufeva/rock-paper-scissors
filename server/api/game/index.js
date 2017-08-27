'use strict';

var express = require('express');
var controller = require('./game.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/update/:id', controller.upsert);
router.put('/winner/:id', controller.pushOnRounds);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
