// 接口 interface
// TypeScript 一个核心原则，就是对所有具有的结构进行类型检查

interface Speak {
    (words: string): string
}

interface User {
    name: string
    age: number
    readonly isMale: boolean
    department?: string
    say: (words: string) => string
    speak: Speak
}

const getUserName = (user: User) => user.department

// 属性检查
interface Config {
    width?: number;
}
function  CalculateAreas(config: Config): { area: number} {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return {area: square};
  }
  
//   let mySquare = CalculateAreas({ widdth: 5 }); // error
let option = { widdth: 5 }
let mySquare = CalculateAreas(option as Config); // pass
// 或者在 Config 加东西(可索引类型)
interface Config2 {
    width?: number;
    [propName: string]: any
}

// 可索引类型     用于不确定有多少元素，但元素的结构固定
interface Phone {
    [name: string]: string
}
interface User2 {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}

// 继承接口
interface VIPUser extends User {
    broadcast: () => void
}
interface SupperUser {
    name: string
}
// 还可以继承多个接口    注意相同名字的属性类型不能冲突
interface VIPUser2 extends User, SupperUser {
    broadcast: () => void
}



