function minNumber(nums) {
  nums.sort((a, b) => {
    const x = a + "" + b
    const y = b + "" + a
    return x - y
  })
  console.log(nums)
  return nums.join("")
}
