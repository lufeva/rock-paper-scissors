'use strict';

import mongoose from 'mongoose';

var GameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [String],
  finished: Boolean,
  winner: String
});

export default mongoose.model('Game', GameSchema);
