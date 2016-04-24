import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      Ember.Object.create({ color: 'red',    id: 1 }),
      Ember.Object.create({ color: 'yellow', id: 2 }),
      Ember.Object.create({ color: 'blue',   id: 3 })
    ];
  }
});
