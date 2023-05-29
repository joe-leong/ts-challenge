type MyExclude<T, U> = T extends U ? never : T;

/**
 * extends 逐一对比
 * T : a b c
 * U : a
 *
 */
// function myExclude(list, target) {
//   let obj = [];
//   list.forEach(item => {
//     if (!target.includes(item)) {
//       obj.push(item)
//     }
//   });
//   return obj;
// }
