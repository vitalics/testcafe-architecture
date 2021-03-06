import { Selector } from "testcafe";

import { CSS, CSSRecord } from "typings/html/css";
import { CustomAttribute, Attribute } from "typings/html/attribute";
import { Element } from "typings/html/element";

import { FindAPI } from "./mixins/find";
import { GrowComponent } from "./Opportunities/Grow";
import { PositionComponent } from "./Position/Position";
import { cast } from 'utils/cast';

export abstract class Component implements ComponentAPI {
  protected readonly root: Element;

  /**
   * return sub text of the component root
   * @internal
   * @memberof Component
   */
  public readonly innerText = this.root.innerText;

  /**
   * return existing of the component
   * @internal
   * @memberof Component
   */
  public isExists() {
    return this.root.exists;
  }

  /**
   * return visibility of the component
   * @internal
   * @memberof Component
   */
  public readonly visible = this.root.visible;

  public constructor(private readonly rootOrSelector: string | Element = 'body') {
    if (typeof rootOrSelector === 'string') {
      this.root = Selector(rootOrSelector);
    } else {
      this.root = rootOrSelector;
    }
  }

  public static async toSelector(element: Element) {
    let selector = '';
    const classes = await element.classNames;
    classes
      .forEach(clas => selector += `.${clas} `)
    return selector;

  }

  /**
   * find a sub element inside the component
   * @internal
   * @param {string} subSelector
   * @param {*} [parentSelector=this.rootSelector]
   * @returns
   * @memberof Component
   */
  public $(subSelector: string, parentSelector = this.root) {
    return parentSelector.find(`${subSelector}`);
  }

  /**
   * find a list of sub elements inside the component
   * @internal
   * @param {string} subSelector
   * @param {*} [parentSelector=this.rootSelector]
   * @returns
   * @memberof Component
   */
  public $$(subSelector: string, parentSelector = this.root) {
    return parentSelector.find(`${subSelector}`);
  }

  /**
   * get css of element
   * @internal
   * @template K
   * @param {K} cssProp
   * @param {*} [selector=this.rootSelector]
   * @returns {Promise<CSS[K]>}
   * @memberof Component
   */
  public async getCSSProperty<K extends keyof CSS>(cssProp: K, selector = this.root): Promise<CSS[K]> {
    return await selector.getStyleProperty(cssProp);
  }

  /**
   * get all element styles
   * @internal
   * @returns {Promise<CSSRecord>}
   * @memberof Component
   */
  public getStyles(): Promise<CSSRecord> {
    return this.root.style;
  }

  /**
   * get attribute for element or root component
   * @internal
   * @template K
   * @param {K} attrName
   * @param {Element} [selector]
   * @returns {Promise<Attribute[K]>}
   * @memberof Component
   */
  public async getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>
  public async getAttribute<K extends keyof CustomAttribute>(attrName: K, selector?: Element): Promise<CustomAttribute[K]>
  public async getAttribute<K extends keyof CustomAttribute>(attrName: K, selector = this.root): Promise<CustomAttribute[K]> {
    return await selector.getAttribute(attrName);
  }

  /**
   * get tag name for root element
   * @internal
   * @returns {Promise<string>}
   * @memberof Component
   */
  public getTagName(): Promise<string> {
    return this.root.tagName;
  }

  /**
   * get all class names for the root element
   * @internal
   * @returns
   * @memberof Component
   */
  public async getClassNames() {
    return this.root.classNames;
  }

  public static cast<CI extends new (rootOrSelector?: Element | string) => C, C extends Component>(instance: CI, rootOrSelector?: Element | string): InstanceType<CI> {
    return cast(instance, rootOrSelector);
  }

  public cast<CI extends new (rootOrSelector?: Element | string) => C, C extends Component>(instance: CI, rootOrSelector?: Element | string): InstanceType<CI> {
    return cast(instance, rootOrSelector);
  }
}

export interface ComponentAPI extends Required<FindAPI> {
  innerText: Promise<string>;
  isExists(): Promise<boolean>;
  visible: Promise<boolean>;
  getCSSProperty<K extends keyof CSS>(cssProp: K, selector?: Element): Promise<CSS[K]>;
  getStyles(): Promise<CSSRecord>;
  getAttribute<K extends keyof Attribute>(attrName: K, selector?: Element): Promise<Attribute[K]>;
  getAttribute<K extends keyof CustomAttribute>(attrName: K, selector?: Element): Promise<CustomAttribute[K]>;
  getTagName(): Promise<string>;
  getClassNames(): Promise<string[]>;
}

let a: Component;

let b = GrowComponent.cast(PositionComponent);
