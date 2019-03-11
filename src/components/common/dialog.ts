import { Component } from 'components/component';
import { DialogAPI } from 'components/mixins/dialog';

export abstract class Dialog extends Component implements DialogAPI {
  public abstract open(): Promise<void>;
  public abstract close(): Promise<void>;
}
