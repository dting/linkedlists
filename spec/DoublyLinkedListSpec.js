describe("DoublyLinkedList", function() {
  var list;

  describe('when created', function() {
    it("should have length equal 0", function() {
      list = new DoublyLinkedList();
      expect(list.length).toEqual(0);
    });

    it("should assign head and tail to null", function() {
      list = new DoublyLinkedList();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });

  describe("#unshift", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it('should set head and tail to new node with element', function() {
        list.unshift(1);
        expect(list.head.element).toBe(1);
        expect(list.tail.element).toBe(1);
        expect(list.head).toBe(list.tail);
      });

      it('should increment length', function() {
        list.unshift(1);
        expect(list.length).toBe(1);
      });
    });

    describe('given a list with a single node', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1);
      });

      it('should not change tail', function() {
        var originalTail = list.tail;
        list.unshift(2);
        expect(list.tail).toBe(originalTail);
      });

      it('should add node with element to front', function() {
        list.unshift(2);
        assertDoublyLinkedList(list, 2, 1);
      });

      it('should increment length', function() {
        list.unshift(2);
        expect(list.length).toBe(2);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it('should not change tail', function() {
        var originalTail = list.tail;
        list.unshift(4);
        expect(list.tail).toBe(originalTail);
      });

      it('should add node with element to front', function() {
        list.unshift(4);
        assertDoublyLinkedList(list, 4, 1, 2, 3);
      });

      it('should increment length', function() {
        list.unshift(4);
        expect(list.length).toBe(4);
      });
    });
  });

  describe("#push", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it('should set head and tail to new node with element', function() {
        list.push(1);
        expect(list.head.element).toBe(1);
        expect(list.tail.element).toBe(1);
        expect(list.head).toBe(list.tail);
      });

      it('should increment length', function() {
        list.push(1);
        expect(list.length).toBe(1);
      });
    });

    describe('given a list with a single node', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1);
      });

      it('should not change head', function() {
        var originalHead = list.head;
        list.push(2);
        expect(list.head).toBe(originalHead);
      });

      it('should add node with element to end', function() {
        list.push(2);
        assertDoublyLinkedList(list, 1, 2);
      });

      it('should increment length', function() {
        list.push(2);
        expect(list.length).toBe(2);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it('should not change head', function() {
        var originalHead = list.head;
        list.push(4);
        expect(list.head).toBe(originalHead);
      });

      it('should add node with element to end', function() {
        list.push(4);
        assertDoublyLinkedList(list, 1, 2, 3, 4);
      });

      it('should increment length', function() {
        list.push(4);
        expect(list.length).toBe(4);
      });
    });
  });

  describe("#insert", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should throw for negative index", function() {
        expect(function() {
          list.insert(-1, 4);
        }).toThrow(new RangeError());
      });

      it("should throw for index greater than length", function() {
        expect(function() {
          list.insert(1, 4);
        }).toThrow(new RangeError());
      });

      it("should set head and tail to new node with element", function() {
        list.insert(0, 4);
        expect(list.head.element).toBe(4);
        expect(list.tail.element).toBe(4);
      });

      it("should increment length", function() {
        list.insert(0, 4);
        expect(list.length).toBe(1);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should throw for negative index", function() {
        expect(function() {
          list.insert(-1, 4);
        }).toThrow(new RangeError());
      });

      it("should throw for index greater than length", function() {
        expect(function() {
          list.insert(4, 4);
        }).toThrow(new RangeError());
      });

      describe('when inserting at the front', function() {
        it("should not change tail", function() {
          var originalTail = list.tail;
          list.insert(1, 4);
          expect(list.tail).toBe(originalTail);
        });

        it("should insert element in list at index", function() {
          list.insert(0, 4);
          assertDoublyLinkedList(list, 4, 1, 2, 3);
        });

        it("should increment length", function() {
          list.insert(0, 4);
          expect(list.length).toBe(4);
        });
      });

      describe('when inserting in the middle ', function() {
        it("should not change head or tail", function() {
          var originalHead = list.head;
          var originalTail = list.tail;
          list.insert(1, 4);
          expect(list.head).toBe(originalHead);
          expect(list.tail).toBe(originalTail);
        });

        it("should insert element in list at index", function() {
          list.insert(1, 4);
          assertDoublyLinkedList(list, 1, 4, 2, 3);
        });

        it("should increment length", function() {
          list.insert(1, 4);
          expect(list.length).toBe(4);
        });
      });

      describe('when inserting at end ', function() {
        it("should not change head", function() {
          var originalHead = list.head;
          list.insert(3, 4);
          expect(list.head).toBe(originalHead);
        });

        it("should insert element in list at index", function() {
          list.insert(3, 4);
          assertDoublyLinkedList(list, 1, 2, 3, 4);
        });

        it("should increment length", function() {
          list.insert(3, 4);
          expect(list.length).toBe(4);
        });
      });
    });
  });

  describe("#get", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should throw for any index", function() {
        expect(function() {
          list.get(-1)
        }).toThrow(new RangeError());
        expect(function() {
          list.get(0)
        }).toThrow(new RangeError());
        expect(function() {
          list.get(1)
        }).toThrow(new RangeError());
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it('should throw if index is negative', function() {
        expect(function() {
          list.get(-1)
        }).toThrow(new RangeError());
      });

      it('should throw if index is greater than length', function() {
        expect(function() {
          list.get(4)
        }).toThrow(new RangeError());
      });

      it('should throw if index is equal to length', function() {
        expect(function() {
          list.get(3)
        }).toThrow(new RangeError());
      });

      it('should return element of node at index', function() {
        expect(list.get(0)).toBe(1);
        expect(list.get(1)).toBe(2);
        expect(list.get(2)).toBe(3);
      });
    });
  });

  describe("#indexOf", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should return -1 for any element", function() {
        expect(list.indexOf(undefined)).toBe(-1);
        expect(list.indexOf(null)).toBe(-1);
        expect(list.indexOf(1)).toBe(-1);
        expect(list.indexOf("hello")).toBe(-1);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should return -1 if element not found", function() {
        expect(list.indexOf(undefined)).toBe(-1);
        expect(list.indexOf(null)).toBe(-1);
        expect(list.indexOf("hello")).toBe(-1);
      });

      it("should return index of any element in list", function() {
        expect(list.indexOf(1)).toBe(0);
        expect(list.indexOf(2)).toBe(1);
        expect(list.indexOf(3)).toBe(2);
      });
    });

    describe('given a list with duplicates', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 1, 2, 3, 2);
      });

      it("should return -1 if element not found", function() {
        expect(list.indexOf(undefined)).toBe(-1);
        expect(list.indexOf(null)).toBe(-1);
        expect(list.indexOf("hello")).toBe(-1);
      });

      it("should return index of first occurrence of element", function() {
        expect(list.indexOf(1)).toBe(0);
        expect(list.indexOf(2)).toBe(2);
        expect(list.indexOf(3)).toBe(3);
      });
    });
  });

  describe("#clear", function() {
    beforeEach(function() {
      list = makeDoublyLinkedListOf(1, 2, 3);
    });

    it('should set head and tail to null', function() {
      list.clear();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    it('should set length to 0', function() {
      list.clear();
      expect(list.length).toBe(0);
    });
  });

  describe("#shift", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should throw", function() {
        expect(function() {
          list.shift();
        }).toThrowError("Can't shift an empty list");
      });
    });

    describe('given a list with a single node', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1);
      });

      it("should set head and tail to null", function() {
        list.shift();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
      });

      it("should return element from removed node", function() {
        expect(list.shift()).toBe(1);
      });

      it("should decrement length", function() {
        list.shift();
        expect(list.length).toBe(0);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should remove the first node and return element", function() {
        expect(list.shift()).toBe(1);
        assertDoublyLinkedList(list, 2, 3);
      });

      it("should decrement length", function() {
        list.shift();
        expect(list.length).toBe(2);
      });
    });
  });

  describe("#pop", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should throw", function() {
        expect(function() {
          list.pop();
        }).toThrowError("Can't pop an empty list");
      });
    });

    describe('given a list with a single node', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1);
      });

      it("should set head and tail to null", function() {
        list.pop();
        expect(list.head).toBeNull();
        expect(list.tail).toBeNull();
      });

      it("should return element from removed node", function() {
        expect(list.pop()).toBe(1);
      });

      it("should decrement length", function() {
        list.pop();
        expect(list.length).toBe(0);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should only change tail", function() {
        var originalHead = list.head;
        var originalTail = list.tail;
        list.pop();
        expect(list.head).toBe(originalHead);
        expect(list.tail).not.toBe(originalTail);
      });

      it("should remove last node return element", function() {
        expect(list.pop()).toBe(3);
        assertDoublyLinkedList(list, 1, 2);
      });

      it("should decrement length", function() {
        list.pop();
        expect(list.length).toBe(2);
      });
    });
  });

  describe("#removeAt", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should throw for any index", function() {
        expect(function() {
          list.removeAt(-1);
        }).toThrow(new RangeError());
        expect(function() {
          list.removeAt(0);
        }).toThrow(new RangeError());
        expect(function() {
          list.removeAt(1);
        }).toThrow(new RangeError());
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should throw for negative index", function() {
        expect(function() {
          list.removeAt(-1);
        }).toThrow(new RangeError());
      });

      it("should throw for index greater than length", function() {
        expect(function() {
          list.removeAt(4);
        }).toThrow(new RangeError());
      });

      it("should throw for index equal to length", function() {
        expect(function() {
          list.removeAt(3);
        }).toThrow(new RangeError());
      });

      describe('when removing front element', function() {
        it("should set head to head.next", function() {
          var originalHead = list.head;
          list.removeAt(0);
          expect(list.head).toBe(originalHead.next);
        });

        it("should remove node and return element", function() {
          expect(list.removeAt(0)).toBe(1);
          assertDoublyLinkedList(list, 2, 3);
        });

        it("should decrement length", function() {
          list.removeAt(0);
          expect(list.length).toBe(2);
        });
      });

      describe('when removing from middle', function() {
        it("should not change head", function() {
          var originalHead = list.head;
          list.removeAt(1);
          expect(list.head).toBe(originalHead);
        });

        it("should remove node and return element", function() {
          expect(list.removeAt(1)).toBe(2);
          assertDoublyLinkedList(list, 1, 3);
        });

        it("should decrement length", function() {
          list.removeAt(1);
          expect(list.length).toBe(2);
        });
      });

      describe('when removing from end', function() {
        it("should not change head", function() {
          var originalHead = list.head;
          list.removeAt(2);
          expect(list.head).toBe(originalHead);
        });

        it("should remove node and return element", function() {
          expect(list.removeAt(2)).toBe(3);
          assertDoublyLinkedList(list, 1, 2);
        });

        it("should decrement length", function() {
          list.removeAt(2);
          expect(list.length).toBe(2);
        });
      });
    });
  });

  describe("#remove", function() {
    describe('given an empty list', function() {
      beforeEach(function() {
        list = new DoublyLinkedList();
      });

      it("should return false for any element", function() {
        expect(list.remove(1)).toBe(false);
        expect(list.remove(undefined)).toBe(false);
        expect(list.remove(null)).toBe(false);
        expect(list.remove("hello")).toBe(false);
        assertDoublyLinkedList(list);
      });

      it("should not change length", function() {
        list.remove(1);
        list.remove(undefined);
        list.remove(null);
        list.remove("hello");

        expect(list.length).toBe(0);
      });
    });

    describe('given a list with multiple nodes', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 2, 3);
      });

      it("should return false for any element not in list", function() {
        expect(list.remove(5)).toBe(false);
        expect(list.remove(undefined)).toBe(false);
        expect(list.remove(null)).toBe(false);
        expect(list.remove("hello")).toBe(false);
        assertDoublyLinkedList(list, 1, 2, 3);
      });

      it("should not change length if element not found", function() {
        list.remove(5);
        list.remove(undefined);
        list.remove(null);
        list.remove("hello");

        expect(list.length).toBe(3);
      });

      describe('when removing from front', function() {
        it("should change head to second node", function() {
          var originalHead = list.head;
          list.remove(1);
          expect(list.head).toBe(originalHead.next);
        });

        it("should remove node and return true", function() {
          expect(list.remove(1)).toBe(true);
          assertDoublyLinkedList(list, 2, 3);
        });

        it("should decrement length", function() {
          list.remove(1);
          expect(list.length).toBe(2);
        });
      });

      describe('when removing from middle', function() {
        it("should not change head", function() {
          var originalHead = list.head;
          list.remove(2);
          expect(list.head).toBe(originalHead);
        });

        it("should remove node and return true", function() {
          expect(list.remove(2)).toBe(true);
          assertDoublyLinkedList(list, 1, 3);
        });

        it("should decrement length", function() {
          list.remove(2);
          expect(list.length).toBe(2);
        });
      });

      describe('when removing from end', function() {
        it("should not change head", function() {
          var originalHead = list.head;
          list.remove(3);
          expect(list.head).toBe(originalHead);
        });

        it("should remove node and return true", function() {
          expect(list.remove(3)).toBe(true);
          assertDoublyLinkedList(list, 1, 2);
        });

        it("should decrement length", function() {
          list.remove(3);
          expect(list.length).toBe(2);
        });
      });
    });

    describe('given a list with duplicates', function() {
      beforeEach(function() {
        list = makeDoublyLinkedListOf(1, 1, 2, 3, 2);
      });

      it("should remove only the first occurrence and return true", function() {
        expect(list.remove(1)).toBe(true);
        assertDoublyLinkedList(list, 1, 2, 3, 2);
      });
    });
  });
});

function makeDoublyLinkedListOf(...elements) {
  var list = new DoublyLinkedList();
  if (elements) {
    var nodes = elements.map(element => new DoubleLinkNode(element));
    list.head = nodes[0];
    list.tail = nodes.reduce((a, b) => {
      a.next = b;
      b.prev = a;
      return b;
    });
    list.length = elements.length;
  }
  return list;
}

function assertDoublyLinkedList(list, ...elements) {
  var forward = list.head;
  var backward = list.tail;
  expect(list.length).toBe(elements.length);
  for (var i = 0; i < elements.length; i++) {
    expect(forward.element).toBe(elements[i]);
    expect(backward.element).toBe(elements[elements.length - 1 - i]);
    forward = forward.next;
    backward = backward.prev;
  }
  expect(forward).toBeNull();
  expect(backward).toBeNull();
}
