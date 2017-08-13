'use strict';
const angular = require('angular');
const d3 = require('d3');
const $ = require('jquery');

console.log('d3', d3)

export class mapComponent {
  /*@ngInject*/
  long = 93.2650;
  lat = -44.9778;
  roll = 0;
  width = 960;
  height = 500;

  constructor($scope) {
    'ngInject';

    var self = this;

    //N and E are negative
    //NS long
    //EW lat

    self.svg = d3.select("#world-map").append("svg")
      .attr('viewBox', [0, 0, self.width, self.height].join(' '));
    self.worldPath = self.svg.append('path')
      .attr('fill', '#2c3e50');

    var url = "http://enjalot.github.io/wwsd/data/world/world-110m.geojson";
    d3.json(url, function(err, geojson) {

      self.geojson = geojson

      var projection = d3.geoOrthographic()
        .scale(self.width / Math.PI)
        .translate([self.width / 2, self.height / 2])
        .rotate([self.long, self.lat, self.roll])

      var path = d3.geoPath()
        .projection(projection);

      self.worldPath
        .attr("d", path(self.geojson));

    })


    function moveMap(data) {

      if(self.animation){
        self.animation.stop();
      }

      if(self.lat != data.lat || self.long != data.long){
        self.svg.selectAll('circle').remove();
      }

      self.animation = $({
        long: self.long,
        lat: self.lat
      }).animate({
        long: data.long,
        lat: data.lat
      }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
          self.lat = this.lat;
          self.long = this.long;

          var projection = d3.geoOrthographic()
            .scale(self.width / Math.PI)
            .translate([self.width / 2, self.height / 2])
            .rotate([this.long, this.lat, self.roll])

          var path = d3.geoPath()
            .projection(projection);

          self.worldPath
            .attr("d", path(self.geojson));
        },
        complete: function(){
          self.svg.append('circle')
          .attr('class', 'animated fadeIn')
          .attr('fill', '#E74C3C')
          .attr('r', 10)
          .attr('cx', self.width / 2)
          .attr('cy', self.height / 2)
        }
      });


    }

  }



}

export default angular.module('map', [])
  .component('map', {
    template: require('./map.html'),
    controller: mapComponent
  })
  .name;
