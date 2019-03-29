import { Component } from "components/Component";
import { DialogAPI } from 'components/mixins/dialog';

export abstract class Dialog extends Component implements DialogAPI {
  public abstract close(): Promise<void>;
}
