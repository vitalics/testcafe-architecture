import { isConstructorable } from "utils/constructorable";

export function usePage<P extends unknown>(page: P): P {
  if (isConstructorable(page)) {
    return Reflect.construct(page as Function, []);
  } else {
    return (page as Function).apply(this);
  }
}