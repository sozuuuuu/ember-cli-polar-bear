let PolarBear = Ember.Object.extend({
  schedule(target, f, interval) {
    return Ember.run.later(this, function() {
      f.apply(target);
      this.start(target, f, interval);
    }, interval);
  },

  kill() {
    return Ember.run.cancel(this.get('timer'));
  },

  start(target, f, interval = 500) {
    this.set('timer', this.schedule(target, f, interval));
  }
});

PolarBear.reopenClass({
  type: 'PolarBear'
});

export default PolarBear.create();

