import { Elements, Element } from "typings/element";

export interface ListAPI {
  getElements(): Elements;
  get(nth: number): Element;
}
