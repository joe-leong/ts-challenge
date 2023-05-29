type First<T extends any[]> = T extends [] ? never : T[0];

function first(arr: any[]) {
  return arr[0];
}
