(function () {
  function getRandomNumber(min, max, fractional) {
    let res = Math.random() * (max - min + 1) + min
    if (fractional) {
      res = res.toFixed(fractional)
    }
    return res
  }

  function getUrlParams() {
    var url = location.search;
    var params = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        params[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return params
  }
  // 柯里化数字处理
  function currying(fn) {
    let args = []

    function next() {
      args = args.concat([...arguments])
      return next
    }
    next.toString = function () {
      return fn.apply(null, args)
    }
    next.valueof = function () {
      return fn.apply(null, args)
    }
    return next
  }
})()