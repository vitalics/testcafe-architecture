import { Element } from "typings/element";

export interface TableAPI {
  getHead: Element;
  getBody: Element;
  getElement(row: number): Element;
}
