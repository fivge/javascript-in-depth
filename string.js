/*
求字符串中无重复字符的最长子串长度
给定 "bbbbb" ，最长不重复子串就是 "b" ，长度是1。
给定 "abcde" ，最长不重复子串是 "abcde" ，长度是5。
给定 "pwwkeewe" ，最长不重复子串是 "wke" ，长度是3。
*/

let getMaxSubString = (str) => {
  let stack = [];

  let subString = "";
  for (let i = 0, len = str.length; i < len; i++) {
    if (subString.indexOf(str[i]) >= 0) {
      if (stack.indexOf(subString) === -1) {
        stack.push(subString);
      }
      subString = str[i];
    } else {
      subString = subString + str[i];
    }
  }

  subString = stack[0];
  for (let i = 1, len = stack.length; i < len; i++) {
    if (stack[i].length > subString.length) {
      subString = stack[i];
    }
  }

  return subString;
};

// let str = "bbbbb";
// let str = "abcde";
let str = "pwwkeewe";

console.log(getMaxSubString(str));

// console.log("".indexOf()
