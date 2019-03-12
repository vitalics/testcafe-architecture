import { Elements, Element } from "typings/html";

export interface ListAPI {
  getElements(): Elements;
  get(nth: number): Element;
}
