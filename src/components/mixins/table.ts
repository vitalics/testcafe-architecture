import { Element } from "typings/html";

export interface TableAPI {
  getHead: Element;
  getBody: Element;
  getElement(row: number): Element;
}
