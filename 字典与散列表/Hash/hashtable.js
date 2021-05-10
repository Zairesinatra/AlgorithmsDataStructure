function defaultToString (item) {
    if(item===null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
        // typeof 操作符返回一个字符串，表示未经计算的操作数的类型
    } else if (typeof item === 'string' && item instanceof String) {
        return `${item}`
    } else {
        return item.toString();
    }
}
class ValuePair {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}:${this.value}]`
    }
}
class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        // 创建表
        this.table = {};
    }
    // 键值加入散列表
    put (key, value) {
        if(key != null && value != null) { // 是否合法 查看这个值是否被添加
            let position = this.hashCode(key);
            this.table[position] = new ValuePair(key, value);
            return true;
        }
        return false // 这个值没有被添加
    }
    get (key) {
        let valuePair = this.table[this.hashCode(key)];
        return valuePair == null ? undefined : valuePair.value
    }
    remove (key) {
        let hash = this.hashCode(key);
        let valuePair = this.table[hash];
        if(valuePair != null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }
    // 实现散列函数
    loseloseHashCode (key) {
        if(typeof key === 'number') {
            return key
        }
        let tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i<tableKey.length; i++) {
            // charCodeAt() 方法返回 0 到 65535 之间的整数
            hash += tableKey.charCodeAt(i);
        }
        // 一般在设计哈希算法时，会选择一个特殊的质数
        // 哈希值会分布在一个较小的数值区间内，分布性不佳，最终可能会导致冲突率上升
        // 避免操作数值变量过大表示范围风险
        return hash % 37;
    }
    hashCode (key) {
        return this.loseloseHashCode(key)
    }
}

console.log("zairesinatra".length); // 这里测试 行29

// 测试hash
let hash = new HashTable();
hash.put('zs','xzy@gmail.com');
hash.put('zy','666666.@qq.com');
hash.put('mxd','zaireisinatra.com');
console.log(hash.hashCode('zs')+'-zs');
console.log(hash.hashCode('zy')+'-zy');
console.log(hash.hashCode('mxd')+'-mxd');
console.log(hash.get('zy'));
console.log(hash.get('testnotexist'));
hash.remove('zs')
console.log(hash.get('zs'));