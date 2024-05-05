function isPathAvi(_obj, str) {
  str = str.split(".");
  console.log(str);

  function isAvi(obj, num) {
    let flag = false;

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === str[num]) {
          console.log("debug", key, num);
          if (num === str.length - 1) {
            flag = true;
            break;
          }
          if (typeof obj[key] !== "object" || obj[key] === null) {
            break;
          }
          if (isAvi(obj[key], num + 1)) {
            falg = true;
            break;
          } else {
            if (isAvi(obj[key], num + 1)) {
              falg = true;
              break;
            } else if (isAvi(obj[key], 0)) {
              falg = true;
              break;
            }
          }
        }
      } else {
        if (typeof obj[key] !== "object" || obj[key] === null) {
          break;
        }
        if (isAvi(obj[key], 0)) {
          falg = true;
          break;
        }
      }
    }

    return flag;
  }

  return isAvi(_obj, 0);
}

let str = "x.y.z";
// let str = "x.y.w";

let obj = {
  x: {
    y: {
      z: 0,
    },
  },
};

console.log(isPathAvi(obj, str));
