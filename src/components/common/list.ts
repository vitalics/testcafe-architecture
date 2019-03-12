import { Component } from 'components/component';
import { ListAPI } from 'components/mixins/list';
import { Element } from 'typings/html';

export abstract class List extends Component implements Required<ListAPI<Component>> {
  abstract getElement(nth: number): Element;
  abstract getComponent<C extends Component>(nth: number): C;
}
