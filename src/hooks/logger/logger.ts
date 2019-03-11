interface LoggerProvider {
  log(message: string, ...optionalParams: any[]): void;
  debug(message: string, ...optionalParams: any[]): void;
  trace(message: string, ...optionalParams: any[]): void;
  warn(message: string, ...optionalParams: any[]): void;
  info(message: string, ...optionalParams: any[]): void;
}

export function useLogger<P extends LoggerProvider>(provider: P) {
  return provider;
}
