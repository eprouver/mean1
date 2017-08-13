'use strict';

describe('Component: instructions', function() {
  // load the component's module
  beforeEach(module('instructions'));

  var instructionsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    instructionsComponent = $componentController('instructions', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
