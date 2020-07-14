const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37;
    // return 38;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b, p); // 1, undefined
console.log("c" in p, p.c); // false, 37
