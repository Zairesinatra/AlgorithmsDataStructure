class Queue {
    constructor() {
        this.count = 0; // count作为items对象中的键
        this.lowestCount = 0;
        this.items = {}; // 获取元素更高效的数据结构选择{}
    }
    enqueue(element){ // 向队列添加元素
        this.items[this.count] = element; // 新项仅能添加队列末尾
        this.count++;
    }
    isEmpty(){
        return this.count - this.lowestCount === 0; // 假设count=2,lowestCount=0,则表示队列中仍有两个元素
        // return this.size() === 0;
    }
    dequeue(){ // 队列移除元素也是遵循先进先出的,最先添加的项被最先移除
        if(this.isEmpty()){return undefined}
        const result = this.items[this.lowestCount] // 暂存以便返回
        delete this.items[this.lowestCount]
        this.lowestCount++;
        return result;
    }
    peek(){ // 查看列头元素-就是首项
        if(this.isEmpty()){return undefined}
        return this.items[this.lowestCount]
    }
    size(){ // 返回队列的长度
        return this.count - this.lowestCount
    }
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        if(this.isEmpty()){
            return ''; // 空队列返回空字符串
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i<this.count; i++){ // Queue类中第一个索引不一定为0,故从lowestCount开始迭代
            objString = `${objString},${this.items[i]}`;
        }
        return objString
    }
}
const zsqueue = new Queue()
zsqueue.enqueue("needdequeue")
zsqueue.enqueue(0)
zsqueue.enqueue(4)
zsqueue.enqueue(2)
zsqueue.enqueue(2)
zsqueue.dequeue()
console.log(zsqueue.peek()) // 0
console.log(zsqueue.toString()); // 0,4,2,2