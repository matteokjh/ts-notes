// 交叉类型
interface AnyObject {
    [prop: string]: any;
}


const mixin = <T extends AnyObject, U extends AnyObject>(
    first: T,
    second: U
): T & U => {
    const res = <T & U>{};
    for (let id in first) {
        (<T>res)[id] = first[id];
    }
    for (let id in second) {
        if (!res.hasOwnProperty(id)) {
            (<U>res)[id] = second[id];
        }
    }
    return res;
};

const x3 = mixin({ a: "hello" }, { b: 42 });
console.log(x3)

// 联合类型 |

// 类型别名 type xxx = xxxx
