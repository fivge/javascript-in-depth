// new Promise((resolve, reject) => {
//   console.log("a1");
//   resolve();
//   console.log("a2");
// }).then(() => {
//   console.log("a3");
// });

// new Promise((resolve, reject) => {
//   console.log("b1");
//   resolve();
//   console.log("b2");
// }).then(() => {
//   console.log("b3");
// });

// new Promise((resolve, reject) => {
//   console.log("a1");
//   resolve();
//   console.log("a2");
// }).then(() => {
//   console.log("a3");
// });

// // let req = new Promise((resolve, reject) => {
// //   console.log(1);

// //   resolve("value");

// //   console.log(2);
// // });

// req.then((res) => console.log(res));
// req.then(console.log);

let req = new Promise((resolve, reject) => {
  console.log(1);

  reject("value");
  //   resolve("value");

  console.log(2);
});

req
  .then((value) => {
    console.log(4, value);
  })
  .catch((value) => {
    console.log(5, value);
    return "1233";
  })

  .then((value) => {
    console.log(6, value);
  });
