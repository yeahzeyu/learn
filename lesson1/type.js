//undefined = 123; //虽然es5之后undefined这个全局变量已经变成了read-only了，开头直接写undefined = 123并不会生效（除非是老旧浏览器），但如果用var undefined = 123或let undefined = 123重新声明一个undefined全局变量则是允许的，这种骚操作会篡改掉原本undefined的值，所以出于代码严谨，还是要用void 0或void(0)来表示初始纯净的undefined的值。
//let undefined = 789; //let undefined = xxx 或 var undefined = xxx都能覆盖在作用域上覆盖掉全局变量undefined的值。
let a;
let b = 0;
let c = '1';
let d = true;
let e = {};
let f = null;
let g = Symbol('g');
let h = void 0;
let i = (function () { });
let j = function () { };
let k = () => { };
let l = undefined;
console.log("void(0) == void 0 结果：", void (0) == void 0);
console.log("void 1 == void 0 结果：", void 1 == void 0);
console.log("void 1 === void 0 结果：", void 1 === void 0);
console.log("undefined == void 0 结果：", undefined == void 0);
console.log("undefined === void 0 结果：", undefined === void 0);
console.log("undefined == 'undefined' 结果：", undefined == 'undefined');
console.log("undefined === 'undefined' 结果：", undefined === 'undefined');
console.log("typeof undefined == void 0 结果：", typeof undefined == void 0);
console.log("typeof undefined === void 0 结果：", typeof undefined === void 0);
console.log("typeof undefined == 'undefined' 结果：", typeof undefined == 'undefined');
console.log("typeof undefined === 'undefined' 结果：", typeof undefined === 'undefined');
console.log('================');
console.log("typeof null == null 结果：", typeof null == null);
console.log("typeof null === null 结果：", typeof null === null);
console.log("typeof null === 'null' 结果：", typeof null === 'null');
console.log('================');
console.log(a, '运行时类型行为是Undefined，typeof结果是', typeof a);
console.log(b, '运行时类型行为是Number，typeof结果是', typeof b);
console.log(c, '运行时类型行为是String，typeof结果是', typeof c);
console.log(d, '运行时类型行为是Boolean，typeof结果是', typeof d);
console.log(e, '运行时类型行为是Object，typeof结果是', typeof e);
console.log(f, '运行时类型行为是Null，typeof结果是', typeof f);
console.log(g, '运行时类型行为是Symbol，typeof结果是', typeof g);
console.log(h, '运行时类型行为是Undefined，typeof结果是', typeof h);
console.log('(function() {}) 运行时类型行为是Object，typeof结果是', typeof i);
console.log('function() {} 运行时类型行为是Object，typeof结果是', typeof j);
console.log('() => {} 运行时类型行为是Object，typeof结果是', typeof k);
console.log(l, '运行时类型行为是Undefined，typeof结果是', typeof l);
l = 123;
console.log(l, '运行时类型行为是Number，typeof结果是', typeof l);
console.log('undefined', undefined);
//var undefined = 456; //严谨模式下，此处再声明undefined只能用var，不能用let
console.log('undefined', undefined);
console.log(l, '运行时类型行为是Number，typeof结果是', typeof l);
void function () {
    undefined = 789;
    console.log('undefined的类型是', typeof undefined, '，值是', undefined);
    console.log(l, '运行时类型行为是Number，typeof结果是', typeof l);
}();


/*
【考题】
一、为什么有的编程规范要求用 void 0 代替 undefined？
答：因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，建议使用void 0 来获取 undefined 值。

二、字符串有最大长度吗？
答：

三、0.1 + 0.2 不是等于 0.3 么？

四、为什么 JavaScript 里不是这样的？ES6 新加入的 Symbol 是个什么东西？

五、为什么给对象添加的方法能用在基本类型上？

【笔记】
1、void是一元运算符，表示返回一个undefined
2、

*/