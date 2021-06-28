
/**
 * 函数式编程
 * 编程范式：命令式编程/声明式编程
 * 命令式编程：1.拿到dom元素 2.从服务器请求数据 3.把请求到的数据放进dom
 * 声明式编程：1.拿到数据，把数据保存在每个位置 2.通过指令做声明
 *
 * 编程范式：面向对象编程/函数式编程
 * 区分这二者在于第一公民，前者为对象，后者为函数
 * 面向对象编程：尽可能把很多东西抽象为对象，封装，继承，多态
 * 函数式编程：尽可能把很多东西抽象为函数，好处：可以进行很多链式编程
 *
 * 高阶函数:函数需要的参数本身也是一个函数 filter/map/resuce
 * 使用高阶函数：
 * const nums = [10,12,50,11122,3,5]
 *
 * let total = nums.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n,0)
 * console.log(total)
 *
 * let total = num.filter(function(n){
 *  return n<100
 * }).map(function(n){
 *  return n*2
 * }).reduce(function(preValue,n){
 *  return preValue+n
 * },0)
 * console.log(total)
 *
 * 1. filter(callbackfn) 函数的使用
 * 参数为回调函数，会在每次遍历的时候执行，回调函数有一个要求：必须返回一个boolean值，
 * true：当返回为true时，函数内部会自动将这次回调的n加入到新的数组中
 * false：当返回值为false时，函数内部会过滤掉这次的n
 * 实现需求1：
 * filter的返回值的就是一个数组，就用一个数组接收这些返回值
 *
 * const nums = [10,12,50,11122,3,5]
 * let newNums = num.filter(function(n){
 *  return n < 100  //其实返回的是 n<100 = true 或者false
 * })
 *
 * 2. map函数的使用 对数组中的每个元素进行处理的话，使用map函数
 * 自动遍历返回，map参数为一个回调函数，返回值也是一个新的数组
 * 实现需求2：
 *
 * newNums.map(function(n){
 *  return n*2
 * })
 *
 * 3.reduce函数的使用
 * reduce作用：对数组中所有内容进行汇总至少两个参数 preValue，上一次返回的值
 * 实现需求3：
 *
 * let total = newNums.reduce(function(preValue,n){
 *  return preValue + n
 * },0) //初始化值（一般为零）preValue根据 return的决定
 *
 * 针对当前数组的操作，这个数组中有四个元素，遍历四次
 * 第一次：preValue 0 | n 20
 * 第二次：preValue preValue + n = 0+20  | n 40
 * 第三次：preValue preValue + n = 20+40 | n 80
 * 第四次：preValue preValue + n = 60+80 | n 100
 * 最终 total=140+100=240
 *
 * 以前普通做法：
 * const nums = [10,12,50,11122,3,5]
 * 需求1：取出小于一百的数字
 * let newNums = []
 * for(let n of nums){
 *  if(n<100){
 *    newNums.push(n)
 *  }
 * }
 * 需求2：将所有小于100 的数字进行转化：全部*2
 * let new2Nums = []
 * for(let n of newNums){
 *  new2Nums.push(n*2)
 * }
 * console.log(new2Nums)
 *
 * 需求3：将所有new2Nums数字相加，得到最终的结果
 * let total = 0
 * for(let n of new2Nums){
 *  total += n
 * }
 * console.log(total)
 */