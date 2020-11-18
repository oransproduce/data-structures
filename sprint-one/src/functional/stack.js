var Stack = function() {
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
  someInstance.push = function(value) {
    someInstance.count++;
    // first
    if (someInstance.count === 0) {
      storage.value = value;
    } else {
      storage.next = {
        value: value,
        next: undefined,
        previous: storage
      };
      storage = storage.next;
    }

  };

  someInstance.pop = function() {
    if (someInstance.count > 1) {
      let currentValue = storage.value;
      storage = storage.previous;
      storage.next = undefined;
      someInstance.count--;
      return currentValue;
    } else if (someInstance.count === 1) {
      let currentValue = storage.value;
      storage.value = undefined;
      storage.next = undefined;
      storage.previous = undefined;
      someInstance.count--;
      return currentValue;
    }

  };

  someInstance.size = function() {
    return someInstance.count;
  };

  return someInstance;
};
