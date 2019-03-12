import { Selector } from "testcafe";

import { CSS, CSSRecord } from "typings/html/css";
import { CustomAttribute, Attribute } from "typings/html/attribute";
import { Element } from "typings/html/element";
import { FindAPI } from "./mixins/find";

export abstract class Component implements ComponentAPI {
  protected readonly rootSelector = Selector(this.root);

  public readonly innerText = this.rootSelector.innerText;
  public readonly exists = this.rootSelector.exists;
  public readonly visible = this.rootSelector.visible;

  public constructor(protected readonly root: string = 'body') { }

  public $(subSelector: string, parentSelector = this.rootSelector) {
    return parentSelector.find(`${subSelector}`);
  }

  public $$(subSelector: string, parentSelector = this.rootSelector) {
    return parentSelector.find(`${subSelector}`);
  }

  public async getCSS<K extends keyof CSS>(cssProp: K, selector = this.rootSelector): Promise<CSS[K]> {
    return await selector.getStyleProperty(cssProp);
  }

  public getStyles(): Promise<CSSRecord> {
    return this.rootSelector.style;
  }

  public async getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>
  public async getAttribute<K extends keyof CustomAttribute>(attrName: K, selector?: Element): Promise<CustomAttribute[K]>
  public async getAttribute<K extends keyof CustomAttribute>(attrName: K, selector = this.rootSelector): Promise<CustomAttribute[K]> {
    return await selector.getAttribute(attrName);
  }

  public getTagName(): Promise<string> {
    return this.rootSelector.tagName;
  }

  byTagName<K extends string, C extends Component>(tag: K, element?: Element): C | Element;
  byTagName<K extends keyof HTMLElementTagNameMap, C extends Component>(tag: K, element?: Element): C | Element;
  byTagName(tag: any, element = this.rootSelector) {
    return this.$(tag, element);
  }
}

export interface ComponentAPI extends Required<FindAPI> {
  innerText: Promise<string>;
  exists: Promise<boolean>;
  visible: Promise<boolean>;
  getCSS<K extends keyof CSS>(cssProp: K, selector?: Element): Promise<CSS[K]>;
  getStyles(): Promise<CSSRecord>;
  getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>;
  getAttribute<K extends keyof CustomAttribute>(attrName: K, selector?: Element): Promise<CustomAttribute[K]>;
  getTagName(): Promise<string>;
}
