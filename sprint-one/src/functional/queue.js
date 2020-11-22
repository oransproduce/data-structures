var Queue = function() {
  var someInstance = {
    count: 0
  };

  // Use an object with numeric keys to store values
  var storage = {
    value: undefined,
    next: undefined,
    previous: undefined
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //list is zero
    if (someInstance.count === 0) {
      storage.value = value;
    } else {
      storage.previous = {
        value: value,
        next: storage,
        previous: undefined
      };
    }
    someInstance.count++;
  };

  someInstance.dequeue = function() {
    if (someInstance.count === 1) {
      let currentValue = storage.value;
      storage = {
        value: undefined,
        next: undefined,
        previous: undefined
      };
      someInstance.count--;
      return currentValue;
    } else if (someInstance.count > 1) {
      let currentValue = storage.value;
      storage = storage.previous;
      storage.next = undefined;
      someInstance.count--;
      return currentValue;
    }
  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
