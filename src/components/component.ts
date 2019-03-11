import { Selector } from "testcafe";

import { CSS } from "typings/css";
import { Attribute } from "typings/attribute";
import { Element } from "typings/element";

export abstract class Component implements ComponentAPI {
  protected rootSelector = Selector(this.root);

  public constructor(protected root: string = 'body') { }

  public $(subSelector: string, parentSelector = this.rootSelector) {
    return parentSelector.find(`${subSelector}`);
  }

  public $$(subSelector: string, parentSelector = this.rootSelector) {
    return parentSelector.find(`${subSelector}`);
  }

  public async getCSS<K extends keyof CSS>(cssProp: K, selector = this.rootSelector): Promise<CSS[K]> {
    return await selector.getStyleProperty(cssProp);
  }

  public async getAttribute(attrName: string, selector?: Element): Promise<string>
  public async getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>
  public async getAttribute<K extends keyof Attribute>(attrName: K, selector = this.rootSelector): Promise<Attribute[K]> {
    return await selector.getAttribute(attrName);
  }
}

export interface ComponentAPI {
  $(subSelector: string): Selector;
  $$(subSelector: string): Selector;
  getCSS<K extends keyof CSS>(cssProp: K, selector?: Element): Promise<CSS[K]>;
  getAttribute<K extends string>(attrName: K, selector?: Element): Promise<Record<string, string>[K]>
  getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>
}
