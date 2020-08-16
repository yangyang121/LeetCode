/**
 * @param {string} path
 * @return {string}
 * 先以 / 切割成数组，然后遇到 .. 且栈不为空弹出最后一个，遇到有值且不为 . 加入栈中
 */
var simplifyPath = function (path) {
  const stack = [];
  const pathArr = path.split("/");
  for (let item of pathArr) {
    if (item === "..") {
      if (stack.length > 0) stack.pop();
    } else if (item && item !== ".") {
      stack.push(item);
    }
  }
  return stack.length > 0 ? "/" + stack.join("/") : "/";
};

simplifyPath("/home/");
simplifyPath("/../");
simplifyPath("/home//foo/");
simplifyPath("/a/./b/../../c/");
simplifyPath("/a/../../b/../c//.//");
