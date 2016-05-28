function SingleLinkNode(element) {
  this.element = element;
  this.next = null;
}

function SinglyLinkedList() {
  this.length = 0;
  this.head = null;
}

/**
 * Add element to beginning
 *
 * @param element to be added
 */
SinglyLinkedList.prototype.unshift = function(element) {
  var node = new SingleLinkNode(element);
  node.next = this.head;
  this.head = node;
  this.length++;
};

/**
 * Add element to end
 *
 * @param element to be added
 */
SinglyLinkedList.prototype.push = function(element) {
  var node = new SingleLinkNode(element);
  if (!this.head) {
    this.head = node;
  } else {
    var current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};

/**
 * Insert element at index
 *
 * @param index of the element after insert
 * @param element to be added
 * @throws {RangeError} if index lt 0 or gt length
 */
SinglyLinkedList.prototype.insert = function(index, element) {
  if (index > this.length || index < 0) {
    throw new RangeError();
  }
  var node = new SingleLinkNode(element);
  if (index === 0) {
    node.next = this.head;
    this.head = node;
  } else {
    var prev = null;
    var current = this.head;
    while (index--) {
      prev = current;
      current = current.next;
    }
    prev.next = node;
    node.next = current;
  }
  this.length++;
};

/**
 * Gets the element at index
 *
 * @param index
 * @returns {*} element at index
 * @throws {RangeError} if index lt 0 or gte length
 */
SinglyLinkedList.prototype.get = function(index) {
  if (index >= this.length || index < 0) {
    throw new RangeError();
  }
  var current = this.head;
  while (index--) {
    current = current.next;
  }
  return current.element;
};

/**
 * Index of first occurrence of element
 *
 * @param element to find
 * @returns {number} index of first occurrence of element or -1 if not found
 */
SinglyLinkedList.prototype.indexOf = function(element) {
  var index = 0;
  var current = this.head;
  while (current) {
    if (current.element === element) {
      return index;
    }
    current = current.next;
    index++;
  }
  return -1;
};

/**
 * Remove all elements
 */
SinglyLinkedList.prototype.clear = function() {
  this.length = 0;
  this.head = null;
};

/**
 * Remove element at index 0
 *
 * @throws {Error} 'Can't shift an empty list'
 * @returns {*} removed element
 */
SinglyLinkedList.prototype.shift = function() {
  if (this.length === 0) {
    throw new Error("Can't shift an empty list");
  }
  var current = this.head;
  this.head = this.head.next;
  this.length--;
  return current.element;
};

/**
 * Remove element at end
 *
 * @throws {Error} 'Can't pop an empty list'
 * @returns {*} removed element
 */
SinglyLinkedList.prototype.pop = function() {
  if (this.length === 0) {
    throw new Error("Can't pop an empty list");
  }
  var prev = null;
  var current = this.head;
  if (this.length === 1) {
    this.head = null;
  } else {
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }
  this.length--;
  return current.element;
};

/**
 * Remove element at index
 *
 * @param index of element to remove
 * @throws {RangeError} if index lt 0 or gte length
 */
SinglyLinkedList.prototype.removeAt = function(index) {
  if (index >= this.length || index < 0) {
    throw new RangeError();
  }
  var prev = null;
  var current = this.head;
  if (index === 0) {
    this.head = this.head.next;
  } else {
    while (index--) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;
  return current.element;
};

/**
 * Remove first occurrence of an element
 *
 * @param element to remove
 * @returns {boolean} if anything was removed
 */
SinglyLinkedList.prototype.remove = function(element) {
  var prev = null;
  var current = this.head;
  while (current) {
    if (current.element === element) {
      if (prev) {
        prev.next = current.next;
      } else {
        this.head = current.next;
      }
      this.length--;
      return true;
    }
    prev = current;
    current = current.next;
  }
  return false;
};
