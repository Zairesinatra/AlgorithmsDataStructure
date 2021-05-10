// 默认键参数转字符串函数
function defaultToString (item) {
    if(item === null){
        return 'NULL';
    }else if (item === undefined){
        return 'UNDEFINED';
    }else if (typeof item === 'string' || item instanceof String){
        return `${item}`
    }
    return item.toString(); // 因理想状态中键值为字符串,而JavaScript是强类型语言,故需要函数转化
}

// 定义一个键值对类
class ValuePair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }
    // 检测键存在于字典
    hasKey(key){
        return this.table[this.toStrFn(key)] !== null;
    }
    // 在字典与ValuePair类中设置键和值
    set(key,value){
        if(key !== null && value !== null) {
            let tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key,value);
            return true;
        }
        return false;
    }
    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }
    get(key){ // 检索特定的key并返回键值对中的值
        let ValuePair = this.table[this.toStrFn(key)];
        return ValuePair == null ? undefined : ValuePair.value
    }
    // 有趣方法
    // 数组方式返回字典中的所有valuePair对象
    keyValues() {
        // Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组(或者说使用for/in迭代)
        return Object.values(this.table)
    }
    // 返回用于识别值得所有健名
    keys() {
        // 使用Array类中的map来迭代每个valuePair
        return this.keyValues().map(ValuePair => ValuePair.key)
    }
    values() {
        return this.keyValues().map(ValuePair => ValuePair.value)
    }
    size() {
        // Object.keys(obj)返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
        // obj要返回其枚举自身属性的对象
        return Object.keys(this.table).length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    clear() {
        this.table = {};
    }
    toString() {
        if(this.isEmpty()){
            return '';
        }
        let valuePairs = this.keyValues();
        let objString = `${valuePairs[0].toString()}`;
        for (let i = 0; i < valuePairs.length; i++){
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return objString;
    }
}
let zsvp = new ValuePair("maplestory","yes")
console.log(zsvp.toString());
let dictionary = new Dictionary();
dictionary.set('zs','123456.@gmail.com')
dictionary.set('zy','666666.@qq.com')
console.log(dictionary.hasKey("zs"));
console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('zy'));
dictionary.remove('zs')
console.log(dictionary.keyValues());