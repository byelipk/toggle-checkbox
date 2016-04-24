import Ember from 'ember';

export default Ember.Controller.extend({

  init() {
    this._super(...arguments);
    this.checkboxes = [];
    this.checkAll   = null;
    this.force      = false;
  },

  actions: {

    register(box) {
      this.get('checkboxes').pushObject(box);
    },

    unregister(box) {
      this.get('checkboxes').removeObject(box);
    },

    checkAll(value, force) {
      this.setProperties({
        checkAll: value,
        force: force === undefined ? !value : force
      });
    },

    sync(value) {
      let checkEach = this.get('checkboxes').isEvery('isChecked', true);
      if (checkEach !== !!this.get('checkAll')) {
        this.send('checkAll', checkEach, false);
      }
    }

  }
});
