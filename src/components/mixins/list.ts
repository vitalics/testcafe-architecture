import { Element } from "typings/html";
import { Component } from "components/Component";

export interface ListAPI<C extends Component> {
  getElement?(nth: number): Element;
  getComponent?(nth: number): C;
}
