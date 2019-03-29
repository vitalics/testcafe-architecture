import { Component } from "components/Component";
import { ClickAPI } from 'components/mixins';

export abstract class Button extends Component implements ClickAPI {
  public constructor(protected readonly selector: string = 'button'){
    super(selector);
  }
  public abstract click(): Promise<void>;
}
