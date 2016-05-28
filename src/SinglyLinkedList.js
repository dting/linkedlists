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
};

/**
 * Add element to end
 *
 * @param element to be added
 */
SinglyLinkedList.prototype.push = function(element) {
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
};

/**
 * Index of first occurrence of element
 *
 * @param element to find
 * @returns {number} index of first occurrence of element or -1 if not found
 */
SinglyLinkedList.prototype.indexOf = function(element) {
};

/**
 * Remove all elements
 */
SinglyLinkedList.prototype.clear = function() {
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
};

/**
 * Remove first occurrence of an element
 *
 * @param element to remove
 * @returns {boolean} if anything was removed
 */
SinglyLinkedList.prototype.remove = function(element) {
};
