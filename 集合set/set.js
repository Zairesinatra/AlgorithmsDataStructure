class Set {
    constructor() {
        this.items = {};
    }
    has(element) {
        // return element in this.items;
        // 更好的实现方式
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
    values() {
        return Object.values(this.items);
    }
    valuesLegacy() {
        return Object.values(this.items); // Object类内置的Object.values()方法返回包含给定对象的所有属性值的数组
    }
    union(otherset) {
        const unionSet = new Set();
        this.values().forEach((value) => {unionSet.add(value)});
        otherset.values().forEach((value) => {unionSet.add(value)});
        return unionSet;
    }
    interSection(otherset) {
        let interSectionSet = new Set(); // 定义要返回的交集集合
        let otherValues = otherset.values();
        let biggerSet = this.values();
        let smallerSet = otherValues;
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
    difference(otherset){
        let differenceset = new Set();
        this.values().forEach(value=>{
            if(!otherset.has(value)){
                differenceset.add(value);
            }
        });
        return differenceset
    }
    isSubsetOf(otherset){
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
console.log(zsset);
console.log(zsset.sizeLegacy());
console.log(zsset.valuesLegacy());
const zy = new Set()
zy.add(1)
zy.add(2)
zy.add("z")
console.log(zy);
const un = zsset.union(zy)
console.log(un); // 注意这里最后z不存在于un
let zairesinatra = new Set()
zairesinatra.add(1)
zairesinatra.add(2)
zairesinatra.add(3)
let xxx = new Set()
xxx.add(1)
xxx.add(2)
console.log(zairesinatra);
console.log(xxx);
const interr = zairesinatra.interSection(xxx)
const dd = zairesinatra.difference(xxx)
const child = xxx.isSubsetOf(zairesinatra)
console.log(interr);
console.log(dd);
console.log(child);
// 到这里,我们实现了JavaScript中Set API的效果