import { Element } from "typings/html";
import { Component } from "components/component";

export interface SelectAPI {
  select(option: Component, nth: number): Promise<void>;
  select(option: Element, nth: number): Promise<void>;
  isSelected(): Promise<boolean>;
  getSelectedIndex(): Promise<number>;
}
