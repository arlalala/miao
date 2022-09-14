
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
           numsa[n][j] = nums[j +k * i]
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
  difference(array, ary =[values]) {
    var a = []
    for (var i = 0; i < array.length; i++){
      if (!(array[i] in ary)) {
          a.push(array[i])
      }
    }
    return a
  },
  differenceBy(array,  ary =[values], iteratee = _.identity) {
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
  drop(array, n = 1) {
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
  dropRight(array, n = 1) {
    if (n > array.length) {
      return []
    }
    var a = []
    for (var i = 0; i < n; i++){
      a.push(array[i])
    }
    return a
  },
  dropRightWhile(array, predicate = _.identity) {

  }
fill: function() {},

}
