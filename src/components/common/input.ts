import { Component } from "components/Component";
import { InputAPI } from "components/mixins";

export abstract class Input extends Component implements InputAPI {
  public constructor(protected readonly selector: string = 'input') {
    super(selector);
  }
  public async getValue() {
    return this.root.value;
  }
  abstract type(value: string): Promise<void>;
}
