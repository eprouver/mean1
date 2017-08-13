'use strict';
const angular = require('angular');

export class instructionsComponent {
  problems = [
    'Bootstrap toggles don\'t toggle for these instructions or for the nav bar when in mobile.',
    'The map doesn\'t update when the selected ticket changes.',
    'Make it so only admin users can add new stops.',
    'Make sure stops can\'t be added that are off the map (-85 to 85 for latitude, -180 to 180 to longitude)',
    'Logout doesn\'t show you as logged out until you refresh.'
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
