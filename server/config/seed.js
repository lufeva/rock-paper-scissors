/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Rule from '../api/rule/rule.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
    Rule.find({}).remove()
      .then(() => {
        let rule = Rule.create(
          {
            move: 'paper',
            kills: 'rock'
          },
          {
            move: 'rock',
            kills: 'scissors'
          },
          {
            move: 'scissors',
            kills: 'paper',
          }
        );
        return rule;
      })
      .then(() => console.log('finished populating rules'))
      .catch(err => console.log('error populating rules', err));
  }
}
