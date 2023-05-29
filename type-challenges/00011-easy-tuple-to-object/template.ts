type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

// const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// type r = TupleToObject<typeof tuple>;

// function tupleToObject(arr) {
//   const obj = {};
//   arr.forEach((item) => {
//     obj[item] = item;
//   });
//   return obj;
// }
