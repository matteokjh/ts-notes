// as 类型断言

interface Person {
    name: string
    age: number
}
const person = {} as Person
person.name = '123'
person.age = 123

// 双重断言
interface Person {
    name: string,
    age: number
}
const Person = 'test' as any as Person // 尽量少用


// 类型守卫
class Person_2 {
    name = 'test'
    age = 22
}
class Animal_2 {
    name = 'dog'
    color = 'black'
}

const getSth = (arg: Person_2 | Animal_2) => {
    if('age' in arg) { // 换成 arg instanceof Person_2 是一样的效果
        console.log(arg.age)
        // console.log(arg.color) // error
    }
    if('color' in arg) {
        // console.log(arg.age) // error
        console.log(arg.color)
    }
}

// 字面量类型守卫
type Foo = {
    type: 'foo',
    foo: number
}
type Bar = {
    type: 'bar',
    bar: string
}

const doSth = (arg: Foo | Bar) => {
    if(arg.type === 'foo') {
        console.log(arg.foo)
    } else {
        console.log(arg.bar)
    }
}


