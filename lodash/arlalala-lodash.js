var arlalala= {
  chunk: function (nums, k) {
    if (nums.length <= k) {
      return nums
    } else {
      var numsa = []
      for (var i = 0; i < nums.length; i = i + k){
           var  n = i / k
           numsa[n] = []
        for (var j = 0; j < k; j++){
           numsa[n].push (nums[j + k * n])
        }
      }
    }
    return numsa
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
  difference: function(array, ary =[values]) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (!(array[i] in ary)) {
          a.push(array[i])
      }
    }
    return a
  },
  differenceBy: function(array,  ary =[values], iteratee = _.identity) {
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
      if (predicate(array[i], i, array)) {
        a.push(array[i])
      } else {
        return a
      }
    }
  },
  dropWhile: function(array, predicate = _.identity) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (predicate(array[i], i, array) == false) {
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

}
