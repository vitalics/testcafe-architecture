import { isConstructorable } from "./constructorable";

type Fn<A extends any[], R> = (...args: A) => R;
type EmptyFn<R> = () => R;

type Ctor<A extends any[], R> = new (...args: A) => R;
type EmptyCtor<R> = () => R;

export function cast<T extends Fn<A, R> | Ctor<A, R> | EmptyFn<R> | EmptyCtor<R>, A extends any[], R>(instance: T, ...args: A): R {
  if (typeof instance === 'function') {
    if (isConstructorable(instance)) {
      return Reflect.construct(instance, args);
    } else {
      (instance as Function).apply(args);
    }
  } else {
    return instance;
  }
}
