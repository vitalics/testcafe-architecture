import { Component } from "components/Component";
import { InputAPI } from "components/mixins";

export abstract class Input extends Component implements InputAPI {
  public readonly value = this.rootSelector.value;
  abstract type(value: string): Promise<void>;
}
