// boolean
const isLoading: boolean = false

// number
const dec: number = 187
const hex: number = 0xbb
const oct: number = 0o273
const bin: number = 0b10111011

// string
const book: string = 'TypeScript String demo'

// void
const u1: void = undefined // 只有 undefined 可以赋值给 void 类型 (strictNullChecks = true)

// null & undefined
const u2: undefined = undefined
const n1: null = null

// Symbol
let sym1 = Symbol('bol1')
const sym2 = Symbol('bol2')
console.log(Symbol('bol1') === Symbol('bol1')) // false

// BigInt
const bgInt = BigInt(100n)
// JS 采用双精度浮点数
let max = Number.MAX_SAFE_INTEGER
let a1 = max
let b1 = max
a1 + 1 === b1 + 2 // true

// 用 bigInt 包着就没事
let safe_max = BigInt(Number.MAX_SAFE_INTEGER)
let a2 = safe_max
let b2 = safe_max
a2 + 1n === b2 + 2n // false

// ===========================================================

// unknown
// any 的安全类型，在确定为某个类型之前不能被进行任何操作比如实例化、getter、函数执行等等
let un1: unknown
// un1.foo.bar;  // ERROR
// un1();        // ERROR
// new un1();    // ERROR
// un1[0][1];    // ERROR

// 一般用作【类型保护】
function getVal(val: unknown): string {
    if(val instanceof Date) {
        return val.toISOString()
    }
    return String(val)
}

// never    永不存在的值的类型
// 即便是 any 也不可以赋值给 never
function err(msg: string): never {
    throw new Error(msg)
}
// 空数组 且永远为空
const empty: never[] = []

// 数组
const list: Array<number> = [1,2,3]
const list2: number[] = [1,2,3]

// 元组 Tuple     表示一个已知类型和数量的数组，各元素类型不必相同
let tuple1: [string, number]
tuple1 = ['hello',123]
tuple1.push(3224234)
// console.log(tuple1) // 可以列举
// console.log(tuple1[2]) // ERROR

// 可以看作是：
interface Tuple extends Array<string | number> {
    0: string;
    1: number;
    length: 2;
}
// 元组继承自数组，但是比数组更加严格

// object
// 普通对象，枚举，数组，元组 都是 object 类型

