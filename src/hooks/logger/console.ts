import { useLogger } from './logger';

export function useConsoleLogger() {
  return useLogger(console);
}
