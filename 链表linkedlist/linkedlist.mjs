import { Node } from './node.mjs'
import { defaultEquals } from './util.mjs'

export class LinkedList { // 对于封装的东西,我们首先考虑有什么共有的属性和方法
    conductor(equalsFn = defaultEquals){
        // 1.head指向所有节点的第一个节点 2.node(element、next)
        this.count = 0; // 存储链表元素的数量
        this.head = null;
        this.equalsFn = equalsFn;
    }
    append(element){
        const node = new Node(element); // element作为值传入创建node项
        let current; // 设一个
        if (this.head == null) { this.head = node }
        else { 
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
         }
         this.count++
    }
    removeAt(index){ // 这里要验证index是否为有效的index
        let current = this.head // 通过current创建对列表第一个元素的引用
        if(index>=0 && index<this.count){
            if(index == 0){this.head = current.next}
            else{
                let previous;
                for(i=0;i<index;i++){ // 迭代链表的node
                    let previous = current;
                    current = current.next;
                }
                previous.next = current.next; // 跳过选择到的current这一项
            }
            this.count--; // 少了一个node
            return current.element; // 返回删除的这个节点元素
        }
        return undefined;
    }
    getElementAt(index){
        if(index>=0 && index<=this.count){
            let node = this.head;
            for(i=0; i<index && node!=null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    insert(element,index){
        if(index>=0&&index<=this.count){ // 检查越界值
            let node = new Node(element);
            if(index === 0){ // 链表起点添加元素
                const current = this.head; // current是第一个元素的引用
                node.next = current; // 插入在current元素之前
                this.head = node; //head引用改为node
            }
            else{
                const previous = this.getElementAt(index-1); // 迭代找到目标元素
                const current = previous.next;
                node.next = current; // 改变previous和current之间的链接
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false; // 错误的index
    }
    indexOf(element){
        let current = this.head; // 拿到指向的第一节点
        for(let i=0; i<this.count&&current!=null; i++){
            if(this.equalsFn(element,current.element)){
                return i;
            }
            current = current.next; // 这里current一直在变为下一项
        }
        return -1;
    }
    remove(element){ // 复用代码
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size() === 0;
    }
    getHead(){
        return this.head;
    }
    toString(){
        if(this.head == null){ // 链表为空则返回空字符串
            return ''
        }
        else{
            let objString = `${this.head.element}`; // 链表第一项初始化最后返回的字符串
            let current = this.head.next;
            for(let i=0; i<this.size() && current != null; i++){
                objString = `${objString},${current.element}`;
                current = current.next;
            }
            return objString;
        }
    }
}

// 测试代码
var ll = new LinkedList()
ll.append('xzy')
ll.append('zs')
ll.append(10)
ll.remove(10)
console.log(ll);
// 常见操作
// 增 => append(element)、insert(position,element)
// 删 => removeAt(position)删除给定位置信息的元素、remove(element)删除元素
// 改 => update(position)
// 查 => get(position)返回对应位置元素、indexOf(element)返回元素列表索引

// append()方法
// 如果是第一个节点 => 将head指向这个节点
// 不是第一个节点 => current.next指针指向这个节点
