// 第 2 章: 一等公民的函数
// 函数真没什么特殊的，
// 你可以像对待任何其他数据类型一样对待它们——把它们存在数组里，
// 当作参数传递，赋值给变量...等等。
const hi = name => `Hi ${name}`;
const greeting = name => hi(name);

hi('ljp');