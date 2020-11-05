function DLinkedNode(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = {};
  this.head = new DLinkedNode();
  this.tail = new DLinkedNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] === undefined) {
    return -1;
  }
  const node = this.cache[key];
  this.moveToHead(node);
  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key] === undefined) {
    const node = new DLinkedNode(key, value);
    this.cache[key] = node;
    this.addToHead(node);
    this.size++;
    if (this.size > this.capacity) {
      const removedNode = this.removeTail();
      delete this.cache[removedNode.key];
      this.size--;
    }
  } else {
    const node = this.cache[key];
    node.value = value;
    this.moveToHead(node);
  }
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};
LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};
LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};
LRUCache.prototype.removeTail = function () {
  const removedNode = this.tail.prev;
  this.removeNode(removedNode);
  return removedNode;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
