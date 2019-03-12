import { List } from "components/common/List";

import { PositionComponent } from "./position";
import { Component } from "components/component";
import { ListAPI } from "components/mixins";

export class PositionListComponent extends Component implements ListAPI<PositionComponent> {
  getComponent(nth: number): PositionComponent {
    return new PositionComponent(this.getElement(nth));
  }
  getElement(nth: number): Selector {
    const items = super.$$('list item');
    return items.nth(nth);
  }
}
