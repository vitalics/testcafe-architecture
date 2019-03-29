import { deprecate as deprecation, format } from 'util';

/**
 * write to console deprecation warning
 *
 * @export
 * @param {string} message
 * @param {...any} formatArgs
 * @returns {MethodDecorator}
 * @example ``` ts
 * class A{
 *  @deprecate('use %s method instead', 'MyMethod')
 *  oldMethod(){}
 * }
 * ```
 * 
 */
export function deprecate(message: string, ...formatArgs: any): MethodDecorator
/**
 * wrap function to node deprecate util
 *
 * @export
 * @template T
 * @param {T} fn
 * @param {string} message
 * @param {...any} formatArgs
 * @returns {T}
 * @example 
 * function old() { }
 * const olded = deprecate(old, 'old');
 * olded(); // deprecation calling here
 */
export function deprecate<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, message: string, ...formatArgs: any): T;
export function deprecate<T extends (...args: Parameters<T>) => ReturnType<T>>(messageOrFn: string | T, message?: string, ...formatArgs: any): any {
  if (typeof messageOrFn === 'function') {
    return deprecation(messageOrFn, format(message, formatArgs));
  } else {
    return (_target: object, _key: string | number, descriptor: TypedPropertyDescriptor<any>) => {
      return deprecateDecorator(descriptor, format(message, formatArgs));
    }
  }
}

function deprecateDecorator(descriptor: TypedPropertyDescriptor<any>, message: string, ): any {
  const oldDescriptor = descriptor.value as Function;

  descriptor.value = function (...args: any[]) {
    const fn = deprecation(oldDescriptor, message);
    const result = fn.apply(this, args);
    return result;
  }
  return descriptor;
};


class A {
  @deprecate('use another method instead')
  deprecatedMethod() {

  }
}

function old() { }
const olded = deprecate(old, 'old %s', 'myMethod');
olded();
