import { Component } from 'components/component';
import { ClickAPI } from 'components/mixins';

export abstract class Button extends Component implements ClickAPI {
  public abstract click(): Promise<void>;
}
