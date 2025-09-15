function getSecondLargest(nums) {
    // Complete the function
    // @ get maximum number 
    const maxNumber = Math.max(...nums);
    let secondLargest = 0
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (n < maxNumber) {
            const diff = n - maxNumber;
            if (diff == -1 || diff == 1) {
                secondLargest = n
            }
        }
    }
    return { secondLargest, maxNumber };
}

console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))