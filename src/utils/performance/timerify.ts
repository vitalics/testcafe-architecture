import { performance } from 'perf_hooks';

/**
 * timerify decorator
 *
 * @export
 * @template T
 * @returns {MethodDecorator}
 * @example ```ts 
 * class Temp{
 * 
 * @timerify()
 * longFunction(){
 *   // long execution
 * }
 * ```
 */
export function timerify<T extends (...args: any[]) => any>(): MethodDecorator;
/**
 * timerify function for performance measuring
 *
 * @export
 * @template F
 * @param {F} fn
 * @returns {F}
 * @example 
 * function longFunction(){
 *   // long execution
 * }
 * const timerifyed = timerify(longFunction);
 * timerifyed(); // execute longFunction with timerify function decoration
 */
export function timerify<F extends (...args: any[]) => any>(fn: F): F;
export function timerify<T extends (...args: any[]) => any>(fn?: T): T | MethodDecorator {
  if (fn) {
    const wrappedFn = performance.timerify(fn);
    return wrappedFn;
  } else {
    return (target: object, key: string | symbol, descrtiptor: TypedPropertyDescriptor<any>) => {
      const oldDescriptor = descrtiptor.value as (...args: any[]) => T;
      descrtiptor.value = function wrapper(...args: any[]): T {
        const wrappedDescriptor = performance.timerify(oldDescriptor);
        const result = wrappedDescriptor.apply(this, args);
        return result;
      }
    };
  }
}
