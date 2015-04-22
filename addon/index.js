let PolarBear = Ember.Object.extend({
  interval: 1000,

  schedule(f) {
    return Ember.run.later(this, function() {
      f.apply(this);
      this.start(f);
    }, this.get('interval'));
  },

  kill() {
    return Ember.run.cancel(this.get('timer'));
  },

  start(f) {
    this.set('timer', this.schedule(f));
  }
});

export default PolarBear;

