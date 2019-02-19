import { isConstructorable } from "utils/constructorable";

export function useComponent<C extends (...args: any[]) => any>(component: C): ReturnType<C> {
  if (isConstructorable(component)) {
    return Reflect.construct(component, []);
  } else {
    return component.apply(this);
  }
}
