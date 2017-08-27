'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('rule-config', {
      url: '/rule-config',
      template: '<rule-config></rule-config>'
    });
}
