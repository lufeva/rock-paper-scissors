'use strict';
import angular from 'angular';

export class NavbarComponent {
  menu = [
    {
      title: 'Home',
      state: 'home'
    },
    {
      title: 'Top List',
      state: 'toplist'
    },
    {
      title: 'Configuration',
      state: 'rule-config'
    }
  ];
  currentNavItem = '';
  isCollapsed = true;

  constructor($state, $timeout) {
    this.$state = $state;
    this.$timeout = $timeout;
  }

  $onInit() {
    //This is not a good practice at all but, I don't have the $routeChangeSuccess, it was this or
    // creating the $on on the rootScope
    this.$timeout(() => {
      this.currentNavItem = this.$state.current.name;
    }, 100);
  }

}

NavbarComponent.$inject = ['$state', '$timeout'];

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
