let globalHooks;
export function useState<T>(defaultValue: T): [() => T, (newValue: T) => void] {
  let hookData = Reflect.get(globalHooks, 'useState');

  if (!hookData) hookData = { calls: 0, store: [] };

  if (hookData.store[hookData.calls] === undefined)
    hookData.store[hookData.calls] = defaultValue;

  let calls = hookData.calls;
  let setValue = function (newValue: T) {
    hookData.store[calls] = newValue;
  };

  let getValue = function (): T {
    return hookData.store[calls];
  }

  hookData.calls += 1;
  Reflect.set(globalHooks, 'useState', hookData);

  return [getValue, setValue];
}
