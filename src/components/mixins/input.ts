export interface InputAPI {
  type(value: string): Promise<void>;
  getValue(): Promise<string>;
}
