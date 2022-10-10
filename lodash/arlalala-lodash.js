function iteratee(predicate) {
  if (typeof predicate == 'function') {
    return predicate
  }
  if (typeof predicate == 'string') {
    return property(predicate)
  }
  if (Array.isArray(predicate)) {
    return matchesProperty(predicate)
  }
  if (typeof predicate == 'object') {
    return matches(predicate)
  }
}
function isMatch(obj, target) {
  for (var key in target) {
    if (key in obj) {
      if (obj[key] !== target[key]) {
        return false
      }
    } else {
      return false
    }
  }
  return true
}
// 返回一个获取某对象propName属性的函数
function property(propName) {
  return function (obj) {
    return obj[propName]
  }
}
// 返回一个判断对象【是否匹配pair名值对】的函数
function matchesProperty(pair) {
  var [key, val] = pair

  return function (obj) {
    return obj[key] === val
  }
}
function matches(target) {
  return function (obj) {
    return isMatch(obj, target)
  }
}
var arlalala = {
  chunk: function(array, size) {
      var result = []
      var index = 0
      for (var i = 0; i < array.length - 1; i++) {
          if (!array[index]) {
              return result
          }
          result[i] = []
          for (var j = 0; j < size; j++) {
              if (!array[index]) {
                  return result
              }
              result[i][j] = array[index]
              index++
          }
      }
  },

  compact: function (nums) {
    var a =[]
    for (var i = 0; i < nums.length; i++){
      if (nums[i]) {
        a.push(nums[i])
      }
    }
    return a
  },
  difference: function (array, ...arys) {
    var b = []
    for (var i = 0; i < arys.length; i++){
      for (var j = 0; j < arys[i].length; j++){
        if (!(arys[i][j] in b)) {
            b.push(arys[i][j])
        }
      }
    }
    var a = []
    for (var i = 0; i < array.length; i++){
      if (!(array[i] in b)) {
          a.push(array[i])
      }
    }
    return a
  },
  differenceBy: function(array, ...arys) {
    var arraya = iteratee(array)
    var arya = iteratee(ary)

    var a = []
    for (var i = 0; i < arraya.length; i++){
      if (!(arraya[i] in arya)) {
          a.push(array[i])
      }
    }
    return a
  },
  drop: function(array, n = 1) {
    if (n > array.length) {
        return []
    }
    var a = []
    for (var i = 0; i < array.length; i++){
      if (i >= n) {
        a.push(array[i])
      }
    }
    return a
  },
  dropRight: function(array, n = 1) {
    if (n > array.length) {
      return []
    }
    var a = []
    for (var i = 0; i <array.length - n; i++){
      a.push(array[i])
    }
    return a
  },
  dropRightWhile: function(array, predicate = _.identity) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (predicate(array[i],  array)) { // 删除了i
        a.push(array[i])
      } else {
        return a
      }
    }
  },
  dropWhile: function(array, predicate = _.identity) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (predicate(array[i],  array) == false) {  // 删除了i
        var k = i
        for (var j = k + 1; j < array.length; j++){
          a.push(array[j])
        }
       }
    }
    return  a
  },
  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++){
      array[i] = value
    }
    return  array
  },
  findIndex: function (array, finder, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++){
      if (finder(array[i])) {
         return  i
       }
    }
    return  -1
  },
  findLastIndex: function (array, predicate = _.identity, fromIndex = array.length -1) {
    for (var i = fromIndex; i >=0; i--){
      if (!predicate(array[i])) {
         return  i
       }
    }
    return  -1
  },
  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++){
      if (!Array.isArray(array[i])) {
        result.push(array[i])
      } else {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      }
    }
    return result
  },
  flattenDeep: flattenDeep =function (array) {
    return array.reduce((pre, it) => {
      if (Array.isArray(it)) {
        return pre.concat(flattenDeep(it))
      }
    },[])
  },
  flattenDepth: function(array, depth = 1) {

  },
  fromPairs: function (pairs) {
    var a = {}
    for (var i = 0; i < pairs.length; i++){
       a[pairs[i][0]] = pairs[i][1]
    }
    return  a
  },
  head: function (array) {
    return array[0]? array[0] : undefined
  },
  indexOf: function (array , value, fromIndex = 0) {
    var len = array.length
      for (var i = fromIndex; i < len; i++){
        if (array[i] == value) {
          return i
        }
      }
    return -1
  },
  initial: function(array) {
    var a = []
    for (var i = 0; i < array.length-1; i++){
      a.push(array[i])
    }
    return a
  },
  intersection: function (...arrays) {
    var result = []
    for (var item of arrays[0]) {
      for (var i = 1; i < arrays.length; i++){
        if (item in arrays[i]) {
           result.push(item)
        }
      }
    }
    return  result
  },
  join: function(array, separator = ',') {
    var result = array[0]
    for (var i = 1; i < array.length; i++){
       result += separator +"" + array[i]
    }
    return result
  },
  last: function (array) {
    return array.at(-1)?array.at(-1) : undefined
  },
  lastIndexOf: function(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--){
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },
  pull: function (array, ...values) {
    for (var i = 0; i < array.length; i++){
      if (values.includes(array[i])) {
        array.splice(i, 1)
        i--
      }
    }
    return array
  },
  reverse: function (array) {
    for (var i = 0; i < array.length / 2; i++){
      var char = array[i]
      array[i] = array[array.length - 1 - i]
      array[array.length - 1 - i] = char
    }
    return array
  },
  sortedIndex: function (array, value) {
    for (var i = 0; i < array.length; i++){
      if (array[i] >= value) {
          return i
      }
    }
  },
  union: function (...arrays) {
    var result = []
    var a = {}
    for (var array of arrays){
      for (var item of array){
        if (!item in result) {
          a[item] = 1
          result.push(item)
        }
      }
    }
    return result
  },
  uniq: function (array) {
    var a ={}
    var result = []
    for (var i = 0; i < array.length; i++){
      if (!(array[i] in a)) {
        a[array[i]] = 0
        result.push(array[i])
      }
      a[array[i]]++
    }
    return result
  },
  unzip: function (arrays) {
    var a = []
    var b = []
    for (var array in arrays) {
      for (var item in array) {
        a.push(item)
        b.push(item)
      }
    }
    result.push(a, b)
    return result
  },
  sortedIndex: function(array, value) {
    for (var i = 0; i < array.length; i++){
      if (value >= array[i]) {
        return i + 1
      }
    }
  },
  without: function (array, ...values) {
    var result = []
    for (var item of array) {
      if (!values.includes(item)) {
         result.push(item)
       }
    }
    return result
  },
  countBy: function (collection, iteratee = _.identity) {

  },
  isArray: function(value) {
    if (this.isArray(value)) {
      return true
    }
    return false
  },
  every: function (array, predicate) {
    for (var i = 0; i < collection.length; i++){
      if (this.predicateis(predicate(i, collection[i], collection) == false)){
        return false
      }
    }
    return true
  }
}
