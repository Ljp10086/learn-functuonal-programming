// 第 3 章：纯函数的好处

// 纯函数是这样一种函数即：
// TODO: 重点 相同的输入，永远会得到相同的输出，
// 而且没有任何可观察的副作用。

{
  const xs = [1,2,3,4,5];

  // 纯的
  xs.slice(0,3);
  //=> [1,2,3]

  xs.slice(0,3);
  //=> [1,2,3]

  xs.slice(0,3);
  //=> [1,2,3]


  // 不纯的
  xs.splice(0,3);
  //=> [1,2,3]

  xs.splice(0,3);
  //=> [4,5]

  xs.splice(0,3);
  //=> []
}

{
  // 不纯的
  var minimum = 21;

  var checkAge = function(age) {
    return age >= minimum;
  };

  // 纯的
  var checkAge = function(age) {
    var minimum = 21;
    return age >= minimum;
  };
}

var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

var squareNumber  = memoize(function(x){ return x*x; });

squareNumber(4);
//=> 16

squareNumber(4); // 从缓存中读取输入值为 4 的结果
//=> 16

squareNumber(5);
//=> 25

squareNumber(5); // 从缓存中读取输入值为 5 的结果
//=> 25