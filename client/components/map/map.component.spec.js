'use strict';

describe('Component: map', function() {
  // load the component's module
  beforeEach(module('map'));

  var mapComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    mapComponent = $componentController('map', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
