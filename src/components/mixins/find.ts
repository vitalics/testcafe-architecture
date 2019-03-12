import { Element } from "typings/html";
import { Component } from "../component";

export interface FindAPI {
  $<C extends Component>(cssSelector: string, element?: Element): Element | C;
  $$<C extends Component>(cssSelector: string, element?: Element): Element | C;

  byTagName?<K extends string, C extends Component>(tag: K): Element | C;
  byTagName?<K extends keyof HTMLElementTagNameMap, C extends Component>(tag: K): Element | C;
}
