import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('destination');
  },
  
  actions : {

    sendPost: function () {
      return this.get('store').createRecord('destination', {point: (new Date()).getTime()}).save();
    }
  }

});
