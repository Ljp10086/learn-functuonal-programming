// 第 2 章: 一等公民的函数
// 函数真没什么特殊的，
// 你可以像对待任何其他数据类型一样对待它们——把它们存在数组里，
// 当作参数传递，赋值给变量...等等。

{
  const hi = name => `Hi ${name}`;
  const greeting = name => hi(name);
  console.log(
    hi('ljp')
  );
}

{
  // 只针对当前的博客
  const validArticles = articles =>
    articles.filter(article => article !== null && article !== undefined);

  // 对未来的项目更友好
  const compact = xs => xs.filter(x => x !== null && x !== undefined);
}

// 注意this值
{
  var fs = require('fs');

  // 太可怕了
  fs.readFile('freaky_friday.txt', Db.save);

  // 好一点点
  fs.readFile('freaky_friday.txt', Db.save.bind(Db));
}
