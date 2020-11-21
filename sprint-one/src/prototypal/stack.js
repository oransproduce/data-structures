var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let instance = Object.create(stackMethods);
  instance.count = 0;
  instance.currentIndex = 0;
  instance.stored = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.stored[this.currentIndex] = value;
    this.currentIndex++;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      let result = this.stored[this.currentIndex - 1];
      this.count--;
      delete this.stored[this.currentIndex - 1];
      this.currentIndex--;
      return result;
    }

  },
  size: function() {
    return this.count;
  }
};
