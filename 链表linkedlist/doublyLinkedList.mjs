import { LinkedList } from './linkedlist.mjs'
import { DoublyNode } from './node.mjs'

// DoublyLinkedList继承Linklist所有属性与方法
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultequals) {
        super(equalsFn);
        // 链表最后一个元素的引用
        this.tail = undefined
    }
    insert(element, index){
        if (index >= 0 && index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if(this.head == null) { // 双向链表为空
                    this.head = node;
                    this.tail = node;
                }else {
                    node.next = this.head; // current为双向链表第一个元素的引用 那么就是 node.next = current
                    current.prev = node; // 为被插入元素设置指针
                    this.head = node; // 使得成为第一个元素
                }
        } else if (index === this.count) {
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.next;
            node.next = current;
            previous.next = node;
            current.prev = node;
            node.prev = previous
        }
            this.count++;
            return ture;
        }
        return false;
    }
}
var dll = new LinkedList()
dll.insert('x','0')
dll.insert('z','1')
dll.insert('y','2')
console.log(dll);