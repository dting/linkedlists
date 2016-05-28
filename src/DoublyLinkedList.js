function DoubleLinkNode(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

/**
 * Add element to beginning
 *
 * @param element to be added
 */
DoublyLinkedList.prototype.unshift = function(element) {
  var node = new DoubleLinkNode(element);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  this.length++;
};

/**
 * Add element to end
 *
 * @param element to be added
 */
DoublyLinkedList.prototype.push = function(element) {
  var node = new DoubleLinkNode(element);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
};

DoublyLinkedList.prototype._nodeAt = function(index) {
  var current;
  if (index < this.length / 2) {
    current = this.head;
    while (index--) {
      current = current.next;
    }
  } else {
    current = this.tail;
    while (++index < this.length) {
      current = current.prev;
    }
  }
  return current;
};

/**
 * Insert element at index
 *
 * @param index of the element after insert
 * @param element to be added
 * @throws {RangeError} if index lt 0 or gt length
 */
DoublyLinkedList.prototype.insert = function(index, element) {
  if (index > this.length || index < 0) {
    throw new RangeError();
  }
  if (index === 0) {
    this.unshift(element);
  } else if (index === this.length) {
    this.push(element);
  } else {
    var node = new DoubleLinkNode(element);
    var next = this._nodeAt(index);
    var prev = next.prev;
    // link node to next and prev.
    node.next = next;
    node.prev = prev;
    // link prev and next to node.
    prev.next = node;
    next.prev = node;
    this.length++;
  }
};

/**
 * Gets the element at index
 *
 * @param index
 * @returns {*} element at index
 * @throws {RangeError} if index lt 0 or gte length
 */
DoublyLinkedList.prototype.get = function(index) {
  if (index >= this.length || index < 0) {
    throw new RangeError();
  }
  return this._nodeAt(index).element;
};

/**
 * Index of first occurrence of element
 *
 * @param element to find
 * @returns {number} index of first occurrence of element or -1 if not found
 */
DoublyLinkedList.prototype.indexOf = function(element) {
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
DoublyLinkedList.prototype.clear = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

/**
 * Remove element at index 0
 *
 * @throws {Error} 'Can't shift an empty list'
 * @returns {*} removed element
 */
DoublyLinkedList.prototype.shift = function() {
  if (this.length === 0) {
    throw new Error("Can't shift an empty list");
  }
  var current = this.head;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  this.length--;
  return current.element;
};

/**
 * Remove element at end
 *
 * @throws {Error} 'Can't pop an empty list'
 * @returns {*} removed element
 */
DoublyLinkedList.prototype.pop = function() {
  if (this.length === 0) {
    throw new Error("Can't pop an empty list");
  }
  var current = this.tail;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
  return current.element;
};

DoublyLinkedList.prototype._removeNode = function(node) {
  if (node.prev) {
    node.prev.next = node.next;
  } else {
    this.head = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  } else {
    this.tail = node.prev;
  }
  this.length--;
  return node;
};

/**
 * Remove element at index
 *
 * @param index of element to remove
 * @throws {RangeError} if index lt 0 or gte length
 */
DoublyLinkedList.prototype.removeAt = function(index) {
  if (index >= this.length || index < 0) {
    throw new RangeError();
  }
  return this._removeNode(this._nodeAt(index)).element;
};

/**
 * Remove first occurrence of an element
 *
 * @param element to remove
 * @returns {boolean} if anything was removed
 */
DoublyLinkedList.prototype.remove = function(element) {
  var current = this.head;
  while (current) {
    if (current.element === element) {
      this._removeNode(current);
      return true;
    }
    current = current.next;
  }
  return false;
};
