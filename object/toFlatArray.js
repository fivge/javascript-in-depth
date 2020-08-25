let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  e: 2,
  f: {
    g: "abc",
  },
};

function toFlatArray(obj) {
  let arr = [];

  function getObjKey(_obj, deep) {
    for (const key in _obj) {
      if (_obj.hasOwnProperty(key)) {
        if (arr[deep]) {
          arr[deep].push(key);
        } else {
          arr[deep] = [key];
        }

        if (typeof _obj[key] === "object" && _obj[key] !== null) {
          getObjKey(_obj[key], deep + 1);
        }
      }
    }
  }

  getObjKey(obj, 0);

  let _arr = [];
  arr.forEach((item) => (_arr = [..._arr, ...item]));

  return _arr;
}

console.log(JSON.stringify(toFlatArray(obj)));
