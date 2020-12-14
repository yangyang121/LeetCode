function minArray(numbers) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (numbers[mid] > numbers[right]) {
      left = mid + 1
    } else if (numbers[mid] < numbers[right]) {
      right = mid
    } else {
      right--
    }
  }
  return numbers[left]
}
