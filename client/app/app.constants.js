'use strict';

import angular from 'angular';

export default angular.module('uruitApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .constant('apiGame', '/api/games/')
  .constant('roundsToWin', 3)
  .name;
