import { useLogger } from "./logger";

const api = {
  log() {
    console.log(); // api RP call
  },
  debug() { },
  trace() { },
  warn() { },
  info() { }
}

export function useRPLogger(): typeof api {
  return useLogger(api);
}
