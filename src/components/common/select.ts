import { Component } from "components/Component";
import { SelectAPI } from "components/mixins";

export abstract class Select extends Component implements SelectAPI {
  public abstract isSelected(): Promise<boolean>;
  public abstract getSelectedIndex(): Promise<number>;
  public abstract select(option: Component, nth: number): Promise<void>;
  public abstract select(option: Selector, nth: number): Promise<void>;
}
