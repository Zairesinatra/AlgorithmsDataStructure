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
class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        // 创建表
        this.table = {};
    }
}
// 实现散列函数
function loseloseHashCode (key) {
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

function hashCode (key) {
    return this.loseloseHashCode(key)
}
console.log("zairesinatra".length); // 这里测试 行29

put(key, value) {
    if(key != null && value != null) {
        let position = this.hashCode(key);
        this.table[position] = new ValuePair(key, value)
    }
}
