var arlalala= {
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
  difference: function (array, ...values) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (!(array[i] in ary)) {
          a.push(array[i])
      }
    }
    return a
  },
  differenceBy: function(array,  ary, iteratee = _.identity) {
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
  findIndex: function (array, predicate = _.identity, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++){
      if (!predicate(array[i])) {
         return  i
       }
    }
    return  -1
  },
  findIndex: function (array, predicate = _.identity, fromIndex = array.length -1) {
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
  indexOf: function(array, value, fromIndex = 0) {
    if (fromIndex >= 0) {
      for (var i = fromIndex; i < array.length; i++){
        if (array[i] = value) {
          return i
        }
      }
    } else {
      for (var i = fromIndex; -i > -array.length ; i--){
        if (array.at(fromIndex) = value) {
          return array.length + i
        }
      }
    }
    return -1
  },
}
