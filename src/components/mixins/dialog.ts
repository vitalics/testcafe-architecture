export interface DialogAPI {
  open(): Promise<void>;
  close(): Promise<void>;
}
