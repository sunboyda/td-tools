##### getRandomNumber 获取随机数

参数：min, max, fractional 最大值，最小值，保留小数位数

### getUrlParams 获取地址栏的参数

直接调用方法获取参数对象，比如 1.html?id=1&name=2 => {id:1,name:2}

### currying 柯里化

参数：函数 里面对数字进行处理如下：

```javascript
add = currying(function() {
  let num = 0
  num = [...arguments].reduce((a, b) => a + b)
  return num
})
console.log(add(1)(2, 4, 5)(6))
console.log(add(1,2,4,5,6)
// 这两个是一样的结果
```
