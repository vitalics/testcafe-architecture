import { Element } from "typings/element";

export interface SelectAPI {
  select(option: Element, nth: number): Promise<void>;
}
