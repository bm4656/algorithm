//linked_list
const fs = require("fs");
const { type } = require("os");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
// var n = parseInt(input);
// console.log(n);
//배열 시간 초과
/*
var card = [];
for (var i = 1; i < n + 1; i++) {
  card.push(i);
}
console.log(card);
var firstLength = card.length;
for (var i = 0; i < firstLength - 1; i++) {
  card.shift();
  var temp = card[0];
  card.shift();
  card.push(temp);
}
console.log(card.join());
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= input; i++) {
  cards.add(i);
}

while (cards.getSize() !== 1) {
  cards.removeHead();
  cards.add(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());
