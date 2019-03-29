export async function forEach<T>(array: T[], cb: (item: T, index?: number, arr?: T[]) => void): Promise<void> {
  for (let index = 0; index < array.length; index++) {
    await cb(array[index], index, array);
  }
}

function getPromise(val: number) {
  return Promise.resolve(val);
}

const a = [getPromise(1), getPromise(2), getPromise(3)]

forEach(a, async (item) => {
  const resolvedItem = await item;
});
