import { Element } from "typings/html";
import { Component } from "../Component";

export interface FindAPI {
  $<C extends Component>(cssSelector: string, element?: Element): Element | C;
  $$<C extends Component>(cssSelector: string, element?: Element): Element | C;
}
