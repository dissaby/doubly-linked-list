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
        var currentNode = this.searchBy(index);
        return currentNode.data;
    }

    insertAt(index, data) {
        var currentNode = this.searchBy(index);
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
        var currentNode = this.searchBy(index);

        if (currentNode == this._head) {
            if (currentNode.next != null) {
                currentNode.next.prev = null;
                this._head = currentNode.next;
            } else {
                this._tail = null;
            }
        } else if (currentNode == this._tail) {
            currentNode.prev.next = currentNode.next;
            this._tail = currentNode.prev;
        } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
    }

    reverse() {
        var currentNode = this._tail;
        while (currentNode != null) {
            var temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;
            currentNode = temp;
        }
        var temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        var i = 0;
        var curentNode = this._head;
        while (curentNode != null) {
            if (curentNode.data === data) {
                return i
            }
            curentNode = curentNode.next;
            i++;
        }
        return -1;
    }

    searchBy(index) {
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
