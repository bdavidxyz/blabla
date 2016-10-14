import { test } from 'qunit';
import moduleForAcceptance from 'blabla/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
  andThen(() => assert.equal(find('ul.destination-list li:first').text(), 'Hello, 123!'));
  andThen(() => assert.equal(find('ul.destination-list li:last').text(), 'Hello, 465!'));
});
