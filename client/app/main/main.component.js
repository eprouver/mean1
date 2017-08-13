import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './main.routes';
const $ = require('jquery');

export class MainController {
  tickets = [];
  newThing = {};

  /*@ngInject*/
  constructor($http, $scope, $rootScope, socket, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.$rootScope = $rootScope;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.$ = $;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things')
      .then(response => {
        this.tickets = response.data;
        this.socket.syncUpdates('thing', this.tickets);
      });
  }

  addThing() {
    if(this.newThing) {
      this.$http.post('/api/things', this.newThing);
      this.newThing = {};
      $('#add-new').modal('hide');
    }
  }

  selectTicket(thing){
    if(!this.ticketSelected){
      setTimeout(function(){
        $('#ticket-details').removeClass('hide');
      }, 1000);
    }
    this.ticketSelected = thing;
    this.$rootScope.$broadcast('move-map', thing);
  }

  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
    this.ticketSelected = null;
  }
}

export default angular.module('mean1App.main', [ngRoute])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
