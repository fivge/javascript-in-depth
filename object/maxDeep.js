let obj = {
  node: "1",
  left: {
    node: "2",
    left: {
      node: "3",
      left: {
        node: "4",
      },
    },
  },
  right: {
    node: "2",
    node2: null,
    left: {
      node: "3",
      left: {
        node: "4",
      },
    },
  },
};

function deepObj(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  let count = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let clildCount = deepObj(obj[key]);
      if (clildCount > count) {
        count = clildCount;
      }
    }
  }
  count = count + 1;

  return count;
}

console.log(deepObj(obj));
