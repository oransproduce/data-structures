var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  _.extend(Queue.prototype, queueMethods);
  this.count = 0;
  this.front = 0;
  this.currentIndex = 0;
  this.stored = {};
};

var queueMethods = {
  enqueue: function(value) {
    this.stored[this.currentIndex] = value;
    this.count++;
    this.currentIndex++;
  },
  dequeue: function() {
    if (this.count > 0) {
      let result = this.stored[this.front];
      delete this.stored[this.front];
      this.count--;
      this.front++;
      return result;
    }

  },
  size: function() {
    return this.count;
  }
};
