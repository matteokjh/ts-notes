class Human {
    constructor(public weight: number, public name: string, public born: string) {

    }
}

interface Man {
    name: string,
    weight: number
}

let s: Man
s = new Human(120, 'test', '1998-02-01')

// 字段多的一方，兼容字段少的一方，反之不然
// 字段多的一方必须包含全部字段少的一方的全部字段
// 反过来会报缺失字段的错误

// 函数的兼容性
let foo = (x: number, y: number) => {};
let bar = (x?: number) => {};

foo = bar // ok
// bar = foo //报错

// 枚举类型 与 数字类型 相互兼容
enum Status {
    Ready,
    Waiting
}
let tr = Status.Ready
let num = 0

tr = num
num = tr

// 类 的类型兼容性
class testA {
    feet: number = 0
    static test: string = '' // ignore
    constructor(name: string, age: number) {

    }
}
class Size {
    feet: number = 0
    constructor(meters: number) {

    }
}
let aa: testA
let sss!: Size
aa = sss
// 类的兼容性，只有 实例成员 和 方法 会相比较，构造函数 和 静态成员 不会被检查

// 私有的 和 受保护的 成员必须来自同一类
class Animal3 {
    protected feet: number = 0
}
class Cat3 extends Animal3 {}

let animal3: Animal3
let cat3!: Cat3;

animal3 = cat3; // ok
cat3 = animal3; // ok

class Size2 {
protected feet: number = 0;
}

let size3: Size;

// animal3 = size3; // ERROR
// size3 = animal3; // ERROR

// 泛型的类型兼容性
interface Person4<T> {

}

let x : Person4<string>
let y !: Person4<number>

x = y // ok
y = x // ok

// 没有成员使用泛型 T，就不会比较 T
// 如果是这样
interface Person5<T> {
    name: T
}
let x2 : Person5<string>
let y2 !: Person5<number>

// x2 = y2 // error
// y2 = x2 // error


