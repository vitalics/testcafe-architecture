export type ExcludeProp<T, K extends keyof T> = {
  [L in Exclude<keyof T, K>]: T[L]
};
