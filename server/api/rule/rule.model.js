'use strict';

import mongoose from 'mongoose';

var RuleSchema = new mongoose.Schema({
  move: String,
  kills: String
});

export default mongoose.model('Rule', RuleSchema);
