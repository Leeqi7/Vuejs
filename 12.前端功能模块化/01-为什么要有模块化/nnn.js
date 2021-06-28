// 立即执行函数 ;防止交叉
;
(function () {
  console.log('小红打印的' + moduleB.flag);
})()