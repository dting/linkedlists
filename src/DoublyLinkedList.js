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
};

/**
 * Add element to end
 *
 * @param element to be added
 */
DoublyLinkedList.prototype.push = function(element) {
};

DoublyLinkedList.prototype._nodeAt = function(index) {
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
};

/**
 * Index of first occurrence of element
 *
 * @param element to find
 * @returns {number} index of first occurrence of element or -1 if not found
 */
DoublyLinkedList.prototype.indexOf = function(element) {
};

/**
 * Remove all elements
 */
DoublyLinkedList.prototype.clear = function() {
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
};

DoublyLinkedList.prototype._removeNode = function(node) {
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
};

/**
 * Remove first occurrence of an element
 *
 * @param element to remove
 * @returns {boolean} if anything was removed
 */
DoublyLinkedList.prototype.remove = function(element) {
};
