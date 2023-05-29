type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// function myPick(todo, keys) {
//   let obj = {};
//   keys.forEach((key) => {
//     if (key in keys) {
//       obj[key] = todo[key];
//     }
//   });
//   return obj;
// }
