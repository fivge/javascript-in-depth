let req = new Promise((resolve, reject) => {
  console.log(1);

  reject("value");

  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

req
  // .then(
  //   function (value) {
  //     console.log(4);
  //     // success
  //   },
  //   function (error) {
  //     console.log(4);
  //     // failure
  //   }
  // )

  .then((a) => {
    console.log(4, a);
  })
  .catch(() => {
    console.log(5);
  })
  .then((a) => {
    console.log(6, a);
    return new Promise((r1, r2) => r1("aaa"));
  })
  .then(() => {
    Promise.resolve("bbb")
      .then((a) => {
        console.log(7, a);
        // return new Promise((r1, r2) => r1("ccc"));
      })
      .then(() => {
        console.log("thennnn");
      });
  })
  .then((a) => {
    console.log(8, a);
  })
  // .then(console.log("a"));
  .then(console.log("a"));

// Promise.resolve("bbb").then((a) => {
//   console.log("ressssss", a);
//   // return new Promise((r1, r2) => r1("ccc"));
// });

// new Promise((r1, r2) => {
//   r1("newwww 1");
// }).then((a) => {
//   console.log("newwww", a);
//   // return new Promise((r1, r2) => r1("ccc"));
// });

console.log(100);

function a(x) {
  return function b(y) {
    return x + y;
  };
}

let obj = {
  getA: function () {},
  getters: {
    // ...
    getTodoById: function (state) {
      return function (id) {
        return state.todos.find((todo) => todo.id === id);
      };
    },
  },
};
