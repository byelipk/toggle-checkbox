import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  // NOTE
  // On Initial Render

  init() {
    this._super(...arguments);

    this.tagName    = 'li';
    this.force      = false;
    this.checkAll   = false;
    this.isChecked  = false;

    this.sendAction('register', this);
  },

  didUpdateAttrs(attrs) {
    this._super(attrs);

    let _old = attrs.oldAttrs.checkAll.value;
    let _new = attrs.newAttrs.checkAll.value;

    if (_old === _new) { return; }

    if (!this.get('isChecked') || this.get('force')) {
      this.set('isChecked', _new);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    this.sendAction('unregister', this);
  },

  actions: {
    updateIsChecked(value) {
      this.set('isChecked', value);
      this.sendAction('did-update-is-checked', this);
    }
  }
 });
