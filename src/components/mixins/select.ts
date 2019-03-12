import { Element } from "typings/html";

export interface SelectAPI {
  select(option: Element, nth: number): Promise<void>;
  selected: Promise<boolean>;
  selectedIndex: Promise<number>;
}
