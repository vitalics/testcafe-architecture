import { Component } from "./component";

export class Components extends Array<Component> {
  static [Symbol.hasInstance](instance: Components): boolean {
    return Array.isArray(instance) && instance.every(component => component instanceof Component);
  }
}
let a: Components = [];
