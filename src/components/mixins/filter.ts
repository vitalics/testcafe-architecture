import { Component } from "components/component";
import { Element } from "typings/html";

export interface FilterAPI {
  filter<C extends Component>(subSelector: string, selector?: Element): Element | C;
}
