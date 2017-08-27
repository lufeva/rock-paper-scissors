/**
 * Rule model events
 */

'use strict';

import {EventEmitter} from 'events';
var RuleEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RuleEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Rule) {
  for(var e in events) {
    let event = events[e];
    Rule.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    RuleEvents.emit(event + ':' + doc._id, doc);
    RuleEvents.emit(event, doc);
  };
}

export {registerEvents};
export default RuleEvents;
