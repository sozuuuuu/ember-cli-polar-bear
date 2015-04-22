let PolarBear = Ember.Object.extend({
  interval: 1000,

  schedule(context, f) {
    return Ember.run.later(this, function() {
      f.apply(context);
      this.start(context, f);
    }, this.get('interval'));
  },

  kill() {
    return Ember.run.cancel(this.get('timer'));
  },

  start(context, f) {
    this.set('timer', this.schedule(context, f));
  }
});

PolarBear.reopenClass({
  type: 'PolarBear'
});

export default PolarBear;

