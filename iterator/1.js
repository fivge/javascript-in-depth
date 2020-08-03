async function test() {
  let arr = [4, 2, 1, 3, 4, 6, 7, 3, 1, 2, 4];

  // arr.forEach(async (item) => {
  //   const res = await handle(item);
  //   console.log(res);
  // });

  // for (let i = 0; i < arr.length; i++) {
  //   const res = await handle(arr[i]);
  //   console.log(res);
  // }

  // for (let i = 0; i < arr.length; i++) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000 * Math.random());
  // }

  for (const iterator of arr) {
    await setTimeout(() => {
      console.log(iterator);
    }, 1000 * Math.random());
  }

  console.log("end");
}

function handle(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 1000 * x);
  });
}

test();
