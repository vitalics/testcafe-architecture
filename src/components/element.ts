import { Selector } from 'testcafe';


export abstract class Element {
  protected root = Selector(this.selector)
  public constructor(protected selector: string) {
  }
}
