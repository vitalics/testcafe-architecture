export interface InputAPI {
  type(value: string): Promise<void>;
  value: Promise<string>;
}
