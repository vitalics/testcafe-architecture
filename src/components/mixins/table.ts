import { Component } from "components/component";
import { Element } from "typings/html";

export interface TableAPI {
  getTHead?(): Element;
  getTBody?(): Element;
  getElement?<C extends Component>(row: number): Element | C;
}
