/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.tweetMap = {};
  this.followMap = {};
  this.tweetTimeMap = {};
  this.time = 0;
  this.newSetForKey = (key, map) => {
    if (!map[key]) map[key] = new Set();
  };
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.newSetForKey(userId, this.tweetMap);

  if (!this.tweetMap[userId].has(tweetId)) {
    this.tweetMap[userId].add(tweetId);
    this.tweetTimeMap[tweetId] = this.time++;
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let list = [];

  if (this.tweetMap[userId]) {
    list = list.concat(Array.from(this.tweetMap[userId]));
  }
  const followeeArr = this.followMap[userId]
    ? Array.from(this.followMap[userId])
    : [];
  for (let followeeKey in followeeArr) {
    const followeeId = followeeArr[followeeKey];

    if (followeeId != userId && this.tweetMap[followeeId]) {
      list = list.concat(Array.from(this.tweetMap[followeeId]));
    }
  }
  return list
    .sort((a, b) => this.tweetTimeMap[b] - this.tweetTimeMap[a])
    .slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  this.newSetForKey(followerId, this.followMap);

  if (!this.followMap[followerId].has(followeeId)) {
    this.followMap[followerId].add(followeeId);
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  this.newSetForKey(followerId, this.followMap);

  if (this.followMap[followerId].has(followeeId)) {
    this.followMap[followerId].delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
