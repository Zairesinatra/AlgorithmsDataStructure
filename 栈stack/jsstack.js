class Stack {
    constructor(){
        // 属性
        this.count = 0; // 帮助记录栈的大小
        this.items = {}; // javascript中对象是一系列键值对
    }
    // 方法
    push(element){
        this.items[this.count] = element; // 插入元素是items对象的值
        this.count++; // count对象是items对象键名
    }
    size(){ return this.count }
    isEmpty(){ return this.count === 0 }
    pop(){ // 删除栈顶元素并返回它
        if(this.isEmpty()){ return undefined;} // 检验栈是否为空
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count]; // JS运算符从对象删除一特定的值
        return result
    }
    peek(){
        if(this.isEmpty()){return undefined}{return this.items[this.count-1]}
    }
    clear(){this.items = {} ; this.count = 0}
    toString(){ // 数组版本有直接提供的 toString方法
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`;
        for(let i=1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
const zsstack = new Stack()
zsstack.push(0)
zsstack.push(4)
zsstack.push(2)
zsstack.push(2)
zsstack.push("needpop")
zsstack.pop()
console.log(zsstack.count); // 返回 4
console.dir(zsstack.toString()) // '0,4,2,2'
