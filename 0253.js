/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  const startTime = []
  const endTime = []
  for (let i = 0; i < intervals.length; i++) {
    startTime.push(intervals[i][0])
    endTime.push(intervals[i][1])
  }
  startTime.sort((a, b) => a - b)
  endTime.sort((a, b) => a - b)
  let ans = 0
  let start = 0
  let end = 0
  while (start < startTime.length) {
    if (endTime[end] <= startTime[start]) {
      end++
      ans--
    }
    start++
    ans++
  }
  console.log(ans)
  return ans
}

minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20],
])
minMeetingRooms([
  [7, 10],
  [2, 4],
])
