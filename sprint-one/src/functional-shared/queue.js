var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {
    count: 0,
    currentIndex: 0,
    front: 0,
    stored: {}
  };

  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    this.stored[this.currentIndex] = value;
    this.currentIndex++;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      let returnValue = this.stored[this.front];
      this.count--;
      delete this.stored[this.front];
      this.front++;
      return returnValue;
    }

  },
  size: function() {
    return this.count;
  }
};
