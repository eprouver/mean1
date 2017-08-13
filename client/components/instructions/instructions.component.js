'use strict';
const angular = require('angular');

export class instructionsComponent {
  problems = [
    'Bootstrap toggles don\'t toggle for these instructions or for the nav bar when in mobile.',
    'Submitting an update to a ticket is not working.',
    'When a ticket is updated it doesn\'t update the map.',
    'Write a test to programatically check that updating a ticket, updates the map.',
    'Logout is returning an error.'
  ];

  /*@ngInject*/
  constructor() {


  }
}

export default angular.module('instructions', [])
  .component('instructions', {
    template: require('./instructions.html'),
    controller: instructionsComponent
  })
  .name;
