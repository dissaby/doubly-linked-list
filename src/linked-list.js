const Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var newNode = new Node(data);
        if (this.length == 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this.length != null) {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail != null) {
            return this._tail.data;
        }
    }

    at(index) {
    }

    insertAt(index, data) {
    }

    isEmpty() {
    }

    clear() {
    }

    deleteAt(index) {
    }

    reverse() {
    }

    indexOf(data) {
    }
}

module.exports = LinkedList;
