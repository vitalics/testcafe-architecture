import { Environment } from 'typings/environment';

export function useEnvironment(): Environment {
  return {
    BASE_URL: process.env.BASE_URL,
  };
}
