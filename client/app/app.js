'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';

import {
  routeConfig
} from './app.config';

/* Dependencies */
import constants from './app.constants';
import util from '../components/util/util.module';

/* Layout Components */
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';

/* States*/
import main from './main/main.component';
import HomeComponent from './states/home/home.component';
import GameComponent from './states/game/game.component';

/* Services */
import ruleService from './commons/services/ruleService/ruleService.service';
import gameService from './commons/services/gameService/gameService.service';

import './app.scss';

angular.module('uruitApp', [
  /* Dependencies */
  ngCookies, ngResource, ngSanitize, uiRouter, ngMaterial, constants, util,
  
  /* Layout Components*/
  navbar, footer, 
  
  /* States */
  main, HomeComponent, GameComponent,

  /* Services */
  ruleService, gameService

])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['uruitApp'], {
      strictDi: true
    });
  });
