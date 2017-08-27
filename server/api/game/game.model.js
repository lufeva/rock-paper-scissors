'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './game.events';

var GameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [String],
  finished: Boolean,
  winner: String
});

registerEvents(GameSchema);
export default mongoose.model('Game', GameSchema);
