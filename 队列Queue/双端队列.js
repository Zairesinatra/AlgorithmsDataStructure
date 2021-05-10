class Queue {
    // 双端队列:部分与queue相同
    constructor() {
        this.count = 0; // count作为items对象中的键
        this.lowestCount = 0;
        this.items = {}; // 获取元素更高效的数据结构选择{}
    }
    isEmpty(){
        return this.count - this.lowestCount === 0; // 假设count=2,lowestCount=0,则表示队列中仍有两个元素
        // return this.size() === 0;
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
    // 允许在两端添加和删除元素,需添加以下几个方法。
    // 双端队列前端添加元素
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element)
        } else if (this.lowestCount>0){
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i>0; i--){
                this.items[i] = this.items[i-1];
            }
            this.count++; // 插入element导致count++
            this.lowestCount = 0;
            this.items[0] = element; // 完成迭代移动,第一项为空闲,则新element覆盖
        }
    }
}