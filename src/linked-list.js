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
        if (this.length == 0) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail == null) {
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        var currentNode = this.searchByIndex(index);
        return currentNode.data;
    }

    insertAt(index, data) {
        var currentNode = this.searchByIndex(index);
        var node = new Node(data);

        if (currentNode == null) {
            this.append(data);
        } else {
            node.prev = currentNode;
            node.next = currentNode;
            currentNode.prev.next = node;
            currentNode.prev = node;
        }
    }

    isEmpty() {
        if (this._head == null) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        if (this._head != null) {
            this._head = null;
            this._tail = null;
            this.length = 0;
        }
        return this;
    }


    deleteAt(index) {
    }

    reverse() {
    }

    indexOf(data) {
    }

    searchByIndex(index) {
        var i = 0;
        var currentNode = this._head;

        while (index != i) {
            currentNode = currentNode.next;
            i++
        }
        return currentNode;
    }
}

module.exports = LinkedList;
