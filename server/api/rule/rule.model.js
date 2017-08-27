'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './rule.events';

var RuleSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(RuleSchema);
export default mongoose.model('Rule', RuleSchema);
