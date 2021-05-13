// Set 无序且唯一 => JavaScript 中对象不允许一个键指向两个不同的属性,保证集合元素唯一
class Set {
    constructor() {
        this.items = {};
    }
    has(element) {
        // return element in this.items;
        return Object.prototype.hasOwnProperty.call(this.items, element)
        // Object原型有hasOwnProperty的方法,返回一个对象是否具有特定属性的布尔值; 使用call避免ESLint出现问题
    }
    add(element) {
        if(!this.has(element)){
            this.items[element] = element; // 同时作为键值保存有利于查找
            return true
        }
        return false
    }
    delete(element) {
        if(!this.has(element)){
            delete this.items[element];
            return true
        }
        false
    }
    clear() {
        this.items = {}
    }

    // size()方法有三种实现方式
    // 方法一,设置一个length,每一次进行add、delete、clear执行加一减以与清除
    // 方法二,Javascript中内置的key方法. => Object.prototype.keys(this.items).length返回给定对象所有属性的数组
    size() {
        return Object.keys(this.items).length
    }
    // 方法三,手动提取items对象每一个属性,记录属性个数并返回-迭代
    sizeLegacy() {
        let count = 0;
        for(let key in this.items) {
            if(this.items.hasOwnProperty((key))){
                count++;
            }
        }
        return count;
    }

    // Object类内置的 Object.values() 方法返回包含给定对象的所有属性值的数组
    values() {
        return Object.values(this.items);
    }
    valuesLegacy() {
        return Object.values(this.items);
    }

    // 并集
    union(otherset) {
        const unionSet = new Set(); // 代表两个集合的并集
        // 迭代添加并集集合中
        this.values().forEach((value) => {unionSet.add(value)});
        otherset.values().forEach((value) => {unionSet.add(value)});
        return unionSet;
    }
    
    // 交集
    interSection(otherset) {
        let interSectionSet = new Set(); // 定义要返回的交集集合
        let otherValues = otherset.values();
        // 默认情况
        let biggerSet = this.values();
        let smallerSet = otherValues;
        // 与默认情况不同则交换
        if(otherValues.length-this.values().length>0){
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value=>{
            if(biggerSet.includes(value)){
                interSectionSet.add(value);
            }
        });
        return interSectionSet;
    }

    // 差集
    difference(otherset){
        let differenceset = new Set();
        this.values().forEach(value=>{
            // 参数数组没有这个元素就加入差集
            if(!otherset.has(value)){
                differenceset.add(value);
            }
        });
        return differenceset
    }

    // 子集
    isSubsetOf(otherset){
        // 传入数组要比默认数组大
        if(this.sizeLegacy()>otherset.sizeLegacy()){
            return false;
        }
        let isSubset = true;
        this.values().every(value=>{
            if(!otherset.has(value)){ // 这里的意思是其他的集合没有则要考虑改变isSubset的布尔值
                isSubset = false;
                return false
            }
            return true;
        });
        return isSubset
    }
}

let zsset = new Set()
zsset.add("z");
zsset.add("s");
console.log(zsset); // Set { items: { z: 'z', s: 's' } }
console.log(zsset.size()); // 2
console.log(zsset.sizeLegacy()); // 2
console.log(zsset.valuesLegacy()); // [ 'z', 's' ]
const zy = new Set()
zy.add(1)
zy.add(2)
zy.add("z")
console.log(zy); // Set { items: { '1': 1, '2': 2, z: 'z' } }
const un = zsset.union(zy)
console.log(un); // 注意这里最后z不存在于un --- Set { items: { '1': 1, '2': 2, z: 'z', s: 's' } }
let zairesinatra = new Set()
zairesinatra.add(1)
zairesinatra.add(2)
zairesinatra.add(3)
let xxx = new Set()
xxx.add(1)
xxx.add(2)
console.log(zairesinatra); // Set { items: { '1': 1, '2': 2, '3': 3 } }
console.log(xxx); // Set { items: { '1': 1, '2': 2 } }
const interr = zairesinatra.interSection(xxx)
const dd = zairesinatra.difference(xxx)
const child = xxx.isSubsetOf(zairesinatra)
console.log(interr); // Set { items: { '1': 1, '2': 2 } }
console.log(dd); // Set { items: { '3': 3 } }
console.log(child); // true
// 到这里实现了 JavaScript 中Set 类的效果