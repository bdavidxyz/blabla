import Ember from 'ember';
import AjaxSetupInitializer from 'blabla/initializers/ajax-setup';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | ajax setup', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AjaxSetupInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
