
import { PositionComponent } from "./position";
import { Component } from "components/Component";

export class PositionListComponent extends Component {
  get(nth: number): PositionComponent {
    return new PositionComponent(this.getElement(nth));
  }
  private getElement(nth: number): Selector {
    const items = super.$$('list item');
    return items.nth(nth);
  }
}
