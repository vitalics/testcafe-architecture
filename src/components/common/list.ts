import { Component } from 'components/component';
import { ListAPI } from 'components/mixins/list';
import { Element, Elements } from 'typings/html';

export abstract class List extends Component implements ListAPI {
  public abstract getElements(): Elements;
  public abstract get(nth: number): Element;
}
