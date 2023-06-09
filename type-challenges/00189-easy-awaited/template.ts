// type Thenable<T> = {
//   then: (onfulfilled: (arg: T) => unknown) => unknown;
// };
// type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<
//   infer X
// >
//   ? X extends Promise<any>
//     ? MyAwaited<X>
//     : X
//   : T extends Thenable<infer Z>
//   ? Z
//   : false;
// infer U infer是ts推断api U用来接收

type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
  T extends PromiseLike<infer X>
    ? X extends PromiseLike<any>
      ? MyAwaited<X>
      : X
    : never;
