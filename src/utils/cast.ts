import { isConstructorable } from "./constructorable";

export function cast<T, A extends any[], R>(instance: T, ...args: A): R {
  if (typeof instance === 'function') {
    if (isConstructorable(instance)) {
      return Reflect.construct(instance, args);
    } else {
      (instance as Function).apply(args);
    }
  } else {
    return instance as unknown as R;
  }
}
