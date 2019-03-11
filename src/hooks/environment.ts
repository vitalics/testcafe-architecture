import { Environment } from 'typings/environment';

export function useEnvironment(): Required<Environment> {
  return {
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
  };
}
