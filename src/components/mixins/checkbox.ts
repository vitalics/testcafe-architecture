import { Component } from "components/component";
import { Element } from "typings/html";

export interface CheckboxAPI {
  isChecked(): Promise<boolean>;
  check<C extends Component>(item: Element | C): Promise<void>;
}
