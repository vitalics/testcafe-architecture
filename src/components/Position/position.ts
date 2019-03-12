import { Component } from "components/Component";
import { PositionAPI } from "components/mixins/position";
import { Element } from "typings/html";

export class PositionComponent extends Component implements PositionAPI {
  public constructor(protected element: Element) {
    super(element);
  }

  /**
   * return state of position
   *
   * @returns {Promise<boolean>}
   * @memberof PositionComponent
   */
  public isHot(): Promise<boolean> {
    return super.$('.hot').visible;
  }

  public getTitle(): Promise<string> {
    return super.$('.title').innerText;
  }

  public getInfo(): Promise<string> {
    return super.$('.info').innerText;
  }
}
