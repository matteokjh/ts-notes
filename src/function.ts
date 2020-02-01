// function
interface Direction12 {
    top: number
    right: number
    bottom: number
    left: number
}
// overload 重载
// 面对这种参数不定的函数，逻辑不一样的函数
function assigned(all: number): Direction12
function assigned(topAndBottom: number, leftAndRight: number): Direction12
function assigned(top: number, right: number, bottom: number, left: number): Direction12

function assigned (a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a
    } else if (c === undefined && d === undefined) {
      c = a
      d = b
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    }
}

function getErr(err: Error) {
  
}
getErr(new Error())

