let obj = {
  a: {
    b: {
      c: { f: "aa" },
    },
    d: {
      e: { g: "bb" },
      h: { i: "cc" },
    },
    j: {
      k: "dd",
    },
  },
}; //f,g,i,c,e,h,k,b,d,j,a

let flat_1 = (obj) => {
  let arr = [];
  for (let item in obj) {
    // console.log(item, typeof item === "object", typeof item);
    // console.log(item);
    arr.push(item);
    if (typeof obj[item] === "object") {
      // arr = arr.concat(flat(item));
      arr = [...arr, ...flat(obj[item])];
    }
    // else {
    // }
  }

  return arr;
};

// console.log(flat(obj));

let flat = (obj) => {
  let _arr = sear(obj, 0, []);

  let arr = [];

  _arr.forEach((item) => {
    arr = [...item, ...arr];
  });

  return arr;
};

const sear = (obj, deep, arr) => {
  !arr[deep]
    ? (arr[deep] = Object.keys(obj))
    : (arr[deep] = arr[deep].concat(Object.keys(obj)));
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sear(obj[key], deep + 1, arr);
    }
  }
  return arr;
};

console.log(flat(obj));
