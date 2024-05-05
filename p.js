romise.all_ = function (promises) {
  return new Promise((resolve, reject) => {
    // Array.from()可将可迭代对象转化为数组
    promises = Array.from(promises);
    if (promises.length === 0) {
      resolve([]);
    } else {
      let result = [];
      let index = 0;
      for (let i = 0; i < promises.length; i++) {
        // 考虑到promise[i]可能是thenable对象也可能是普通值
        Promise.resolve(promises[i]).then(
          (data) => {
            result[i] = data;
            if (++index === promises.length) {
              // 所有的promise状态都是fulfilled，promise.all返回的实例才变成fulfilled状态
              resolve(result);
            }
          },
          (err) => {
            reject(err);
            return;
          }
        );
      }
    }
  });
};
