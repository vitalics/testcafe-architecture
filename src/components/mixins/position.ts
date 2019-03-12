export interface PositionAPI {
  isHot(): Promise<boolean>;
  getTitle(): Promise<string>;
  getInfo(): Promise<string>;
}

