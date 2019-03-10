//数组的解构赋值
let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)
let [...tail] = [1, 2, 3, 4, 5, 6, 7]
// console.log(tail)
function* fibs() {
  let a = 0
  let b = 1
  while (true) {
    yield a
    ;[a, b] = [b, a + b]
  }
}
let [first, second, third, fourth, fifth, sixth] = fibs()
// console.log(sixth)
//对象的解构赋值
//p也要作为变量赋值
let obj = {
  p: ['Hello', { y: 'world' }]
}
let {
  p,
  p: [x, { y }]
} = obj
// console.log(x, y)
//三次解构赋值
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
}
let {
  loc,
  loc: { start },
  loc: {
    start: { line }
  }
} = node
let objer = {}
let arr = []
;({ foo: objer.prop, bar: arr[0] } = { foo: 123, bar: true })
// console.log(objer, arr)
var { xy: yx } = { xy: 5 }
let mx
;({ mx } = { mx: 1 })
// console.log(mx)
let { log, cos, sin, tant } = Math
// console.log(log)
let arrs = [1, 2, 3]
let { 2: firsts, [arrs.length - 2]: last } = arrs
//3、字符串的解构赋值
let { length: len } = '2'
// console.log(len)
//4、数值和布尔值的解构赋值
let { toString: abull } = 123
// console.log(abull === Number.prototype.toString)
let { toString: bBull } = true
// console.log(bBull === Boolean.prototype.toString)
//5、函数参数的解构赋值
function add([x, y]) {
  // alert(x+y);
  return x + y
}
add([1, 3])
;[[1, 2], [3, 4]].map(([a, b]) => a + b)
// console.log([[1, 2], [3, 4]].map(([a, b]) => a + b))

var aryy = [1, 2, 3, 4]
var newAryy = aryy.map(function(item, vv) {
  return item * 2 + vv
})
// console.log(newAryy);
//为函数move的参数指定默认值，而不是为变量x和y指定默认值
function move({ x, y } = { x: 0, y: 0 }) {
  return [x, y]
}
console.log(move({}))
console.log(move({ x: 5, y: 4 }))
console.log([0, undefined, 4].map((x = 'yes') => x))
console.log(([bb] = [3]))
//7、用途
//（1）交换变量的值
let mm = 1
let nn = 2
console.log(([mm, nn] = [nn, mm]))
console.log([mm, nn])
//（2）从函数返回多个值
// 返回一个数组
function example() {
  return [1, 2, 3]
}
console.log(([as, bs, cs] = example()))
// 返回一个对象
function examples() {
  return {
    foor: 2,
    bae: 5
  }
}
console.log(({ foor, bae } = examples()))
//（3）函数参数的定义
// 参数是一组有次序;的值
function ff([bx, by, bz]) {
  return [bx, by, bz]
}
console.log(ff([1, 2, 3]))
// 参数是一组无次序的值
function fff({ x, y, z }) {
  return { x, y, z }
}
console.log(fff({ z: 3, x: 5, y: 4 }))
//（4）提取 JSON 数据
let jsonData = {
  id: 23,
  status: 'ok',
  data: [333, 5766]
}
let { id, status, data: number } = jsonData
console.log(id, status, number)
// let savedata=id;
// alert(savedata);
//（5）函数参数的默认值
//指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句
jQuery.ajax = function(
  url,
  {
    async = true,
    beforeSend = function() {},
    cache = true,
    complete = function() {},
    crossDomain = false,
    global = true
    // ... more config
  } = {}
) {
  // ... do stuff
  // alert(async)
}
// jQuery.ajax('./eeer', { async: false })
// （6）遍历 Map 结构
const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')
for (let [key, value] of map) {
  console.log(key + ' is ' + value)
}
// 获取键名
for (let [key] of map) {
  console.log(key)
}
// 获取键值
for (let [, value] of map) {
  console.log('a is ' + value)
}
// （7）输入模块的指定方法
// const { SourceMapConsumer, SourceNode } = require("source-map");
