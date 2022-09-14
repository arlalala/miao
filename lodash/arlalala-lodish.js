
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

fill: function() {},

}
