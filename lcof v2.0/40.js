function getLeastNumbers(arr, k) {
  function partition(left, right) {
    const x = arr[left]
    let i = left
    let j = right
    while (i < j) {
      while (i < j && arr[j] > x) {
        j--
      }
      if (i < j) arr[i] = arr[j]
      while (i < j && arr[i] < x) {
        i++
      }
      if (i < j) arr[j] = arr[i]
    }
    arr[i] = x
    return i
  }
  let left = 0
  let right = arr.length - 1
  let index = partition(left, right)
  while (index !== k) {
    if (index < k) {
      left = index + 1
    } else {
      right = index - 1
    }
    index = partition(left, right)
  }
  return arr.slice(0, k)
}
