import { Compare, defaultCompare } from '../../src/util.mjs';
    // 交换数组两个值
function swap (array, a, b) {
        // 辅助变量复制第一个交换值
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
    // ES6解构赋值
    // const swap = (array, a, b) => [array[a],array[b]] = [array[b], array[a]]
export class MinHeap {
    constructor(compareFn = defaultCompare){
        this.compareFn = compareFn;
        this.heap = []; // 数组存储数据
        // 对于给定的 index 节点
        // 左侧子节点位置是 2 * index + 1
        // 右侧子节点位置是 2 * index + 2
        // 父节点位置是 index / 2
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if(index === 0) {
            return undefined;
        }
        return Math.floor((index-1)/2);
    }
    insert(value) {
        if(value != null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }
    // 上移操作
    siftUp(index) {
        let parent = this.getParentIndex(index);
        while (
            index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
        ) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
    size() {
        return this.heap.length;
    }
    isEmpty() {
        return this.size() === 0;
    }
    findMininum() {
        return this.isEmpty() ? undefined : this.heap[0];
    }
}
const heap = new MinHeap();
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);
console.log('Heap size:', heap.size()); // Heap size: 5
console.log('Heap is empty:', heap.isEmpty()); // Heap is empty: false
console.log('Heap min value:', heap.findMininum()); // Heap min value: 2
console.log(heap);