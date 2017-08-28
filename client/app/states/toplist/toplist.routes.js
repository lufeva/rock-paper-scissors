'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('toplist', {
      url: '/toplist',
      template: '<toplist></toplist>'
    });
}
