type Length<T extends readonly any[]> = T["length"];

function myLength(arr: any[]) {
  return arr.length;
}
