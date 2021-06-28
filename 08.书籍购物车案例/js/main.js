const app = new Vue({
  el: '#app',
  data: {
    message: 'hello vue',
    books: [
      {
        id: 1,
        name: '《红楼梦》',
        date: "1987-07",
        price: 120.00,
        count: 1
      },
      {
        id: 2,
        name: '《水浒传》',
        date: "1985-03",
        price: 108.00,
        count: 1
      },
      {
        id: 3,
        name: '《西游记》',
        date: "1986-05",
        price: 110.00,
        count: 1
      },
      {
        id: 4,
        name: '《三国演义》',
        date: "1983-10",
        price: 136.00,
        count: 1
      },
    ],
    isDisable: true
  },
  methods: {
    // 第一种方法 
    // toFixed(2)保留两位小数
    // getFinalPrice (price) {
    //   return '￥' + price.toFixed(2)
    // },
    increment (index) {
      this.books[index].count++
      console.log('increment', '编号：' + this.books[index].id, '数量：' + this.books[index].count);
    },
    decrement (index) {
      if (this.books[index].count <= 1) {
        return this.isDisable = true
      } else {
        this.books[index].count--
      }
      console.log('decrement', '编号：' + this.books[index].id, '数量：' + this.books[index].count);
    },
    removeHandle (index) {
      this.books.splice(index, 1)
    }
  },
  //过滤器
  filters: {
    // 第二种方法
    //一般是个函数，自动将要过滤的东西作为参数传进来
    showPrice (price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    // showPrice () {
    //   let res = '￥' + price.toFixed(2)
    //   return res
    // }
    totalPrice () {

      //1. 普通的for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2. for(let i in this.books)
      // let totalPrice = 0
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //3. for(let i of this.books)
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      //4. reduce
      // return this.books.reduce(function (pre, book) {
      //   return pre + book.price * book.count
      // }, 0)

      return this.books.reduce((pre, book) => pre + book.price * book.count, 0)
    }
  }
})
