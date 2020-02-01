// 泛型
// 在静态编写的时候不确定传入参数是什么类型，只有在运行时传入参数才能确定的时候可用
// 泛型变量 <T> 捕获传入参数类型，捕获了之后就可以用作参数和返回值类型

function testGeneric<T>(p: T): T {
    return p
}

// 多个类型参数
function swap<T,U>(param: [T,U]): [U,T] {
    return [param[1],param[0]]
}
console.log(swap([7,'SEVEN']))

// 数组
function printLen<T>(arr: T[]): T[] {
    console.log(arr.length)
    return arr
}
printLen([1,2,3,4,'23','234'])

// 泛型接口
interface ReturnItemFn<T> {
    (param: T): T
}
const returnItem: ReturnItemFn<number> = para => para

// 泛型 类
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}

// 泛型约束
type yakusoku = string | number
class Stack2<T extends yakusoku> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
// const stack1 = new Stack2<boolean>() // error
const stack1 = new Stack2<string>()

// 泛型约束 & 索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}
const a = {
    name: 'test123',
    age: 18
}
console.log(getValue(a,'name')) // test123

// 多重类型 & 泛型约束
interface FirstInterface {
    doSomething(): number
}
interface SecondInterface {
    doSomethingElse(): string
}
// 由于不能在定义泛型的时候指定多个约束类型，所以要定义子接口
interface childInterface extends FirstInterface,SecondInterface {
}
class Demo<T extends childInterface> {
    private genericProp!: T

    useT() {
        this.genericProp.doSomething()
        this.genericProp.doSomethingElse()
    }
}

// 泛型 与 new
function factory<T>(type: {new(): T}): T {
    return new type()
}