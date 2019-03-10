// import { stat } from "fs";

// (function f1() {
//     let n = 5;
//     if (true) {
//         let n = 10
//     }
//     console.log(n)
// }())
{ { { { { let insane = "Hello world!" } } } } }
// console.log(insane)
{
    let = 'seret';
    let f = function () {
        return a;
    }
    // console.log(f)
}
//const声明一个只读的常量。一旦声明，常量的值就不能改变。

const foo = {};
foo.prop = 123;
// console.log(foo.prop)
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] === "object") {
            cinstantize(obj[key]);
        }
    })
}
// console.log(constantize = 4)
// window.a = 12;
// console.log(a);
