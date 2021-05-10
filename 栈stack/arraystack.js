// 创建一个基于数组的类表示栈
class Stack {
    constructor(){
        this.items=[]; // 需要一种数据结构保存栈中元素,这里选择数组,大部分方法时间复杂度为O(n)
    }
    push(element){
        this.items.push(element) // 栈添加元素
    }
    pop(element){
        return this.items.pop(element) // 栈顶移除元素
    }
    peek(){
        return this.items[this.items.length-1] // 查看栈顶元素
    }
    isEmpty(){
        return this.items.length === 0 // 检查栈是否为空
    }
    size(){
        return this.items.length // 返回栈长度
    }
    clear(){
        this.items = [] // 清空栈元素
    }
}
const zsstack = new Stack() // 初始化
console.log(zsstack.isEmpty()) // 判断栈内是否为空 此处返回 true
zsstack.push(0)
zsstack.push(4)
zsstack.push(2)
zsstack.push(2)
console.log(zsstack.peek()) // 查看栈顶元素 此处返回 2
console.log(zsstack.size()) // 返回栈长度 此处返回 4
console.log(zsstack.isEmpty()) // 判断栈内是否为空 此处返回 false
zsstack.push("what")
zsstack.pop() // 栈顶移除元素
console.log(zsstack.size()) // 返回栈长度 此处返回 4