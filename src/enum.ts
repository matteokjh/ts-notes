// 枚举类型用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。
enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right) // 10 11 12 13

// 异构枚举    虽然可以做到，但是不推荐
enum unusualEnum {
    No = 0,
    Yes = 'Yes'
}
// 反向映射枚举
enum Direction2 {
    Up = 10,
    Down,
    Left,
    Right
}
console.log(Direction2[10]) // Up
// 枚举的本质是 Direction[Direction['Up'] = 10] = 'Up'

// 常量枚举
const enum Direction3 { // 写 const 作用是编译的时候可以去掉  可以提升性能
    Up = 10,
    Down,
    Left,
    Right
}
const d1 = Direction3.Up
let d2 = Direction3.Down

type c = 0
declare let b: c
// b = 1 // ERROR

// 为枚举添加静态方法

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
namespace Month {
    export function isSummer(month: Month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false
        }
    }
}


console.log(Month.isSummer(Month.January)) // false