import { Page } from "../page";
import { PositionListComponent } from "components/Position";
import { OpportunitiesComponent } from "components/Opportunities";

export class HomePage extends Page {
  public readonly positions = new PositionListComponent();

  public readonly opportunities = new OpportunitiesComponent();

  public async choosePosition(positionName: string) {
    const position = this.positions.getComponent(1);
    const isHot = await position.isHot();
    return isHot;
  }
}
