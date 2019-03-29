import { RelocationComponent } from "./Relocation";
import { Component } from "components/Component";
import { ListAPI } from "components/mixins";
import { GrowComponent } from "./Grow";

type Components = RelocationComponent | GrowComponent;

export class OpportunitiesComponent extends Component implements ListAPI<Components> {
  public constructor() {
    super('main');
  }

  get(nth: number): Components {
    switch (nth) {
      case 0:
        return new RelocationComponent();
      case 1:
        return new GrowComponent();
      default:
        throw new Error(`no such component by number: ${nth}`);
    }
  }
}
