import { Component } from "components/component";
import { SelectAPI } from "components/mixins";

export abstract class Select extends Component implements SelectAPI {
  select(option: Selector, nth: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
