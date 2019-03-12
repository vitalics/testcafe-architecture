import { Component } from "components/Component";
import { SelectAPI } from "components/mixins";

export abstract class Select extends Component implements SelectAPI {
  public readonly selected: Promise<boolean> = this.rootSelector.selected;
  public readonly selectedIndex: Promise<number> = this.rootSelector.selectedIndex;
  abstract select(option: Selector, nth: number): Promise<void>;
}
