# Linked List

Notes and simple implementation and tests for linked lists and doubly linked list.

See [solutions branch](https://github.com/dting/linkedlists/tree/solutions) for implementation.

## Why use linked lists over arrays? Why not?
  * Arrays
    * Arrays require contigous chunks of memory to be allocated.
    * Insert at front or middle of array is linear time, `O(n)`. Each element needs to be shifted over before insert.

        ```
        [ 1, 2, 3, _ ]
        [ 1, 2, _, 3 ]
        [ 1, _, 2, 3 ]
        [ _, 1, 2, 3 ]
        [ 4, 1, 2, 3 ]
        ```

    * Insert at end of (dynamic) array is amortized constant time, `O(1)`.
      * `O(1)` when array is not full.

          ```
          [ 1, 2, 3, _ ]
          [ 1, 2, 3, 4 ]
          ```

      * When an array is full, elements in the array are moved to a larger array (usually significantly larger in size so this operation doesn't have to happen often). If we double the size of the array everytime it needs to grow, this takes `k` time, where `k` is number of elements in the array. However this only happens once every `k` inserts so it is `O(k/k)` or **amortized** `O(1)` per insert.

          ```
          [ 1, 2, 3, 4 ]
          [ _, 2, 3, 4 ] ... [ 1, _, _, _, _, _, _, _]
          [ _, _, 3, 4 ] ... [ 1, 2, _, _, _, _, _, _]
          [ _, _, _, 4 ] ... [ 1, 2, 3, _, _, _, _, _]
          [ _, _, _, _ ] ... [ 1, 2, 3, 4, _, _, _, _]
                         ... [ 1, 2, 3, 4, 5, _, _, _]
          ```

    * Random access, `get(index)` is `O(1)`.
    * No memory overhead per element for `next`/`prev` references.

  * Linked List
    * Allow for adding to front in `O(1)`.
    * Allow for adding to end in `O(1)`, if tail reference is kept.
    * No resizing operations.
    * No random access, `get(index)` is `O(n)`.
    * Memory overhead for storing `next` (and `prev` for doubly linked) reference per element.

## Linked List

     (head)
      null

     (head)
    [ 1    ]
    [ next ] -> null

     (head)
    [ 1    ]
    [ next ] -> [ 2    ]
                [ next ] -> null

     (head)
    [ 1    ]
    [ next ] -> [ 2    ]
                [ next ] -> [ 3    ]
                            [ next ] -> null

## Doubly Linked List

             (head)
             (tail)
              null

             (head)
             (tail)
    null <- [ prev ]
            [ 1    ]
            [ next ] -> null

             (head)
    null <- [ prev ]     (tail)
            [ 1    ] <- [ prev ]
            [ next ] -> [ 2    ]
                        [ next ] -> null

             (head)
    null <- [ prev ]
            [ 1    ] <- [ prev ]     (tail)
            [ next ] -> [ 2    ] <- [ prev ]
                        [ next ] -> [ 3    ]
                                    [ next ] -> null
