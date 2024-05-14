var twoSum = function(nums, target) {
    let n = nums.length
    
    for(let i=0; i<=n-2; i++) {
        for(let j=1; j<=n-1; j++) {
            if(i == j) {
                continue
            }
            if((nums[i]+nums[j]) == target) {
                return [i,j]
            } 
        }
    }
}